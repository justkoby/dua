import React from 'react';
import { MessageCircle } from 'lucide-react';
import { duaContact } from './dua-data.js';

export default function WhatsAppLauncher() {
  return (
    <a
      className="dua-whatsapp-launcher"
      href={duaContact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with DUA Secretariat on WhatsApp (${duaContact.phone})`}
      title={`WhatsApp DUA Secretariat (${duaContact.phone})`}
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

