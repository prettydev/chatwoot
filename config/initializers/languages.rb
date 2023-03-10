# Based on ISO_639-3 Codes. ref: https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
# This Hash is used in account model, so do not change the index for existing languages

LANGUAGES_CONFIG = {
  0 => { name: 'English (en)', iso_639_3_code: 'eng', iso_639_1_code: 'en', enabled: true },  
}.filter { |_key, val| val[:enabled] }.freeze

Rails.configuration.i18n.available_locales = LANGUAGES_CONFIG.map { |_index, lang| lang[:iso_639_1_code].to_sym }
