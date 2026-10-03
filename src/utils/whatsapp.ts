export const WHATSAPP_PHONE = '918056666653';

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  inquiryType: 'Sales Inquiry' | 'Service & Repair' | 'Dealership Inquiry' | 'General Query';
  tvModel?: string;
  message: string;
}

export const formatInquiryMessage = (data: InquiryPayload): string => {
  const lines = [
    `*ZUVO WEBSITE FORM INQUIRY*`,
    `--------------------------------------------------`,
    `*Customer Name:* ${data.name}`,
    `*Contact Phone:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : '',
    `*Inquiry Category:* ${data.inquiryType}`,
    data.tvModel ? `*Selected TV Model:* ${data.tvModel}` : '',
    `*Requirement Details:* ${data.message}`,
    `--------------------------------------------------`,
    `Sent to ZUVO Owner & Service Hub (+91 8056666653)`,
  ].filter(Boolean);

  return lines.join('\n');
};

/* CATEGORY 1: GENERAL SALES & SERVICE CHAT */
export const getGeneralWhatsAppUrl = (): string => {
  const message = [
    `Welcome to ZUVO Android TV Sales & Service! 📺`,
    `Owner Assistant (+91 8056666653)`,
    ``,
    `Please reply with your details:`,
    `1. Customer Name: `,
    `2. City / Location: [Aarani / Nearby Area]`,
    ``,
    `3. Select Inquiry Type:`,
    `[ ] New TV Purchase & Price Quote`,
    `[ ] TV Wall Mounting & Installation`,
    `[ ] Technical Service, Repair & Warranty`,
    `[ ] Dealership & Wholesale Orders`,
    ``,
    `4. Select ZUVO TV Variety:`,
    `[ ] 24" Normal LED TV`,
    `[ ] 32" Smart LED TV`,
    `[ ] 32" Smart TV + B/T + Voice Remote`,
    `[ ] 43" Smart LED TV`,
    `[ ] 43" Smart TV + B/T + Voice Remote`,
    `[ ] 50" Smart TV + B/T + Voice Remote`,
    `[ ] 55" Smart TV + B/T + Voice Remote`,
    ``,
    `5. Specific Query / Requirements: `,
  ].join('\n');

  return createWhatsAppUrl(message);
};

/* CATEGORY 2: NEW TV PURCHASE & PRICING */
export const getQuickSalesUrl = (tvModel?: string): string => {
  const message = [
    `Welcome to ZUVO TV Sales & Purchase! 🛒`,
    `Owner Sales Desk (+91 8056666653)`,
    ``,
    `Please reply with your purchase requirements:`,
    `1. Customer Name: `,
    `2. Delivery Location: [Aarani Town / Surrounding Area]`,
    ``,
    `3. Select ZUVO TV Model You Want to Buy:`,
    tvModel ? `[x] ${tvModel}` : `[ ] 24" Normal LED TV`,
    !tvModel ? `[ ] 32" Smart LED TV` : '',
    !tvModel ? `[ ] 32" Smart TV + B/T + Voice Remote` : '',
    !tvModel ? `[ ] 43" Smart LED TV` : '',
    !tvModel ? `[ ] 43" Smart TV + B/T + Voice Remote` : '',
    !tvModel ? `[ ] 50" Smart TV + B/T + Voice Remote` : '',
    !tvModel ? `[ ] 55" Smart TV + B/T + Voice Remote` : '',
    ``,
    `4. Information Requested:`,
    `[ ] Best Price Quote & Launch Discounts`,
    `[ ] Free Home Delivery in Aarani`,
    `[ ] Wall Mount Stand & Installation`,
    `[ ] Bluetooth & Voice Remote Specs`,
    ``,
    `5. Quantity / Additional Notes: `,
  ].filter(Boolean).join('\n');

  return createWhatsAppUrl(message);
};

/* CATEGORY 3: TECHNICAL SERVICE & REPAIR */
export const getQuickServiceUrl = (): string => {
  const message = [
    `Welcome to ZUVO Technical Service & Repair Hub! 🛠️`,
    `Owner Service Desk (+91 8056666653)`,
    ``,
    `Please reply with your service details:`,
    `1. Customer Name: `,
    `2. Service Location / Address: `,
    `3. Your ZUVO TV Model: [e.g. 24" / 32" / 43" / 50" / 55"]`,
    ``,
    `4. Technical Service Needed:`,
    `[ ] New TV Wall Mounting & Setup`,
    `[ ] Display Panel & Screen Check`,
    `[ ] Audio, Remote & Bluetooth Pairing`,
    `[ ] Software / App Update Assistance`,
    `[ ] General Repair & Warranty Claim`,
    ``,
    `5. Describe Issue / Service Requirement: `,
  ].join('\n');

  return createWhatsAppUrl(message);
};

/* CATEGORY 4: DEALERSHIP & BULK ORDERS */
export const getDealershipWhatsAppUrl = (): string => {
  const message = [
    `Welcome to ZUVO Commercial & Dealership Network! 💼`,
    `Owner Business Desk (+91 8056666653)`,
    ``,
    `Please reply with your dealership / bulk order details:`,
    `1. Business Contact Name: `,
    `2. Store / Company Name: `,
    `3. Location / Town: `,
    ``,
    `4. Partnership Type:`,
    `[ ] Authorized ZUVO Dealership & Showroom Display`,
    `[ ] Wholesale / Retail Distribution`,
    `[ ] Commercial Bulk Order (Hotels, Offices, Institutions)`,
    ``,
    `5. Expected Quantity & Business Query: `,
  ].join('\n');

  return createWhatsAppUrl(message);
};
