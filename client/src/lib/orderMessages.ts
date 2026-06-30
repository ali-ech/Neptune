import type { CartItem } from '../context/CartContext';
import { formatPrice, isCustomPriced } from '../data/products';
import { BRAND } from '../assets';

const DIVIDER = '─────────────────';

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
}

function formatItemLines(items: CartItem[]): string[] {
  return items.map((item, index) => {
    const lineTotal = isCustomPriced(item.product.price)
      ? 'Price on request'
      : formatPrice(item.product.price * item.qty);
    const unitPrice = isCustomPriced(item.product.price)
      ? 'On request'
      : formatPrice(item.product.price);
    return [
      `${index + 1}. ${item.product.name}`,
      `   ${item.qty} × ${unitPrice}  →  ${lineTotal}`,
    ].join('\n');
  });
}

export function buildAdminOrderMessage(order: OrderDetails): string {
  const itemBlock = formatItemLines(order.items).join('\n\n');
  const lines = [
    `*NEW ORDER — ${BRAND.fullName.toUpperCase()}*`,
    `_${BRAND.fullName}_`,
    '',
    DIVIDER,
    '',
    `*Order Reference*`,
    order.orderId,
    '',
    `*Payment Method*`,
    `Cash on Delivery (COD)`,
    '',
    DIVIDER,
    '',
    `*Order Items*`,
    '',
    itemBlock,
    '',
    DIVIDER,
    '',
    `*Order Total:* ${formatPrice(order.subtotal)}`,
    '',
    DIVIDER,
    '',
    `*Customer Details*`,
    `Name: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email?.trim() || 'Not provided'}`,
    `Address: ${order.address}`,
  ];

  if (order.notes?.trim()) {
    lines.push('', `*Special Instructions*`, order.notes.trim());
  }

  lines.push('', DIVIDER, '', `Please contact the customer to confirm delivery details.`);

  return lines.join('\n');
}

export function buildCustomerOrderConfirmation(order: OrderDetails): string {
  const itemBlock = order.items
    .map((item) => {
      const price = isCustomPriced(item.product.price)
        ? 'On request'
        : formatPrice(item.product.price * item.qty);
      return `• ${item.product.name}  ×  ${item.qty}  —  ${price}`;
    })
    .join('\n');

  return [
    `*${BRAND.fullName.toUpperCase()}*`,
    `_${BRAND.fullName}_`,
    '',
    DIVIDER,
    '',
    `Dear ${order.customerName},`,
    '',
    `Thank you for choosing ${BRAND.fullName}. Your order has been received successfully.`,
    '',
    `*Order Reference:* ${order.orderId}`,
    `*Payment Method:* Cash on Delivery`,
    '',
    DIVIDER,
    '',
    `*Your Order*`,
    '',
    itemBlock,
    '',
    `*Total Amount:* ${formatPrice(order.subtotal)}`,
    '',
    DIVIDER,
    '',
    `Our team will contact you shortly on ${order.phone} to confirm delivery.`,
    '',
    `With warm regards,`,
    `*The ${BRAND.name} Team*`,
  ].join('\n');
}

export interface PartnerApplication {
  ref: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message?: string;
}

export function buildAdminPartnerMessage(app: PartnerApplication): string {
  const lines = [
    `*NEW PARTNERSHIP APPLICATION — ${BRAND.fullName.toUpperCase()}*`,
    '',
    DIVIDER,
    '',
    `*Reference:* ${app.ref}`,
    `Name: ${app.name}`,
    `Email: ${app.email}`,
    `Phone: ${app.phone}`,
    `Type: ${app.type}`,
  ];
  if (app.message?.trim()) lines.push('', `*Message*`, app.message.trim());
  return lines.join('\n');
}

export interface ContactInquiry {
  ref: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function buildAdminContactMessage(inquiry: ContactInquiry): string {
  return [
    `*NEW CONTACT INQUIRY — ${BRAND.fullName.toUpperCase()}*`,
    '',
    DIVIDER,
    '',
    `*Reference:* ${inquiry.ref}`,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Subject: ${inquiry.subject}`,
    '',
    `*Message*`,
    inquiry.message.trim() || '—',
  ].join('\n');
}

export function buildCustomerContactConfirmation(inquiry: ContactInquiry): string {
  return [
    `*${BRAND.fullName.toUpperCase()}*`,
    '',
    DIVIDER,
    '',
    `Dear ${inquiry.name},`,
    '',
    `Thank you for contacting ${BRAND.fullName}. We have received your message and will get back to you shortly on ${inquiry.phone}.`,
    '',
    `*Reference:* ${inquiry.ref}`,
    `*Subject:* ${inquiry.subject}`,
    '',
    `With warm regards,`,
    `*The ${BRAND.name} Team*`,
  ].join('\n');
}

export function buildCustomerPartnerConfirmation(app: PartnerApplication): string {
  return [
    `*${BRAND.fullName.toUpperCase()}*`,
    '',
    DIVIDER,
    '',
    `Dear ${app.name},`,
    '',
    `Thank you for your interest in partnering with ${BRAND.fullName}.`,
    `We have received your application and will contact you on ${app.phone}.`,
    '',
    `*Reference:* ${app.ref}`,
    '',
    `With warm regards,`,
    `*The ${BRAND.name} Team*`,
  ].join('\n');
}
