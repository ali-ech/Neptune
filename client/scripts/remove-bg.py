"""Remove light/white backgrounds from logo and product images."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
SRC_ASSETS = Path(r"C:\Users\PMLS\.cursor\projects\d-Agencies-Neptune\assets")
LOGO_SRC = SRC_ASSETS / (
    "c__Users_PMLS_AppData_Roaming_Cursor_User_workspaceStorage_a18ac5743bdf081620bdb8175182b087_images_"
    "WhatsApp_Image_2026-06-29_at_8.47.20_PM-b04a2377-3f0e-4dda-9985-8b320505fc2b.png"
)

PRODUCTS_DIR = ASSETS / "products"


def is_background(r: int, g: int, b: int, mode: str) -> bool:
    if mode == "logo":
        # Pale blue-grey logo card background
        return r > 210 and g > 225 and b > 235 and abs(r - g) < 25
    # White / near-white studio background for bottles
    return r > 235 and g > 235 and b > 235


def remove_bg(src: Path, dest: Path, mode: str = "white", fuzz: int = 18) -> None:
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_background(r, g, b, mode):
                pixels[x, y] = (r, g, b, 0)
            elif mode == "white" and r > 220 and g > 220 and b > 220:
                # Soft edge feathering
                dist = max(255 - r, 255 - g, 255 - b)
                alpha = max(0, min(255, int((dist / fuzz) * 255)))
                pixels[x, y] = (r, g, b, min(a, 255 - alpha))
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "PNG")
    print(f"Saved {dest}")


def main() -> None:
    if LOGO_SRC.exists():
        remove_bg(LOGO_SRC, ASSETS / "logo.png", mode="logo")
        remove_bg(LOGO_SRC, ASSETS / "logo-white.png", mode="logo")
    else:
        print(f"Logo source missing: {LOGO_SRC}")

    raw_map = {
        "neptune-hero-v2.png": ASSETS / "waterbottle.png",
        "neptune-500-v2.png": PRODUCTS_DIR / "bottle-500.png",
        "neptune-1500-v2.png": PRODUCTS_DIR / "bottle-1500.png",
        "neptune-5000-v2.png": PRODUCTS_DIR / "bottle-5000.png",
        "neptune-bundle-v2.png": PRODUCTS_DIR / "bundle.png",
    }
    for raw_name, dest in raw_map.items():
        src = SRC_ASSETS / raw_name
        if src.exists():
            remove_bg(src, dest, mode="white")
        else:
            print(f"Skip missing: {src}")

    # Bundle uses hero bottle composite path - copy 1500 as bundle placeholder if no bundle gen
    bundle = PRODUCTS_DIR / "bundle.png"
    bottle1500 = PRODUCTS_DIR / "bottle-1500.png"
    if bottle1500.exists() and not bundle.exists():
        Image.open(bottle1500).save(bundle)


if __name__ == "__main__":
    main()
