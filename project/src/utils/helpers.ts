import { siteConfig } from '@/data/siteConfig';

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`;
}

export function getGeneralWhatsAppUrl(): string {
  return getWhatsAppUrl(
    `Hello, I would like to know more about ${siteConfig.companyName} tour packages.`
  );
}

export function getPackageWhatsAppUrl(packageTitle: string): string {
  return getWhatsAppUrl(
    `Hello, I am interested in the ${packageTitle} tour package. I would like to know more about availability and pricing.`
  );
}

export function getTelUrl(): string {
  return `tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`;
}

export function getMailUrl(): string {
  return `mailto:${siteConfig.email}`;
}
