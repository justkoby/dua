import { heroSlides } from './hero-content.js';
import { homepageDefaults } from './homepage-defaults.js';

export function resetSiteContent() {}

export function withDefaults(fallback, data) {
  if (Array.isArray(fallback)) return Array.isArray(data) ? data : fallback;
  if (fallback && typeof fallback === 'object') {
    const out = {};
    for (const key of Object.keys(fallback)) {
      out[key] = withDefaults(fallback[key], data && typeof data === 'object' ? data[key] : undefined);
    }
    return out;
  }
  return data === undefined || data === null ? fallback : data;
}

export function getHomepage() {
  return homepageDefaults;
}

export function getHeroSlides() {
  return heroSlides;
}

export function isPreview() {
  return false;
}
