export interface consumer {
  consumers_address_country: string;
  consumers_booking_code: number;
  consumers_name: string;
  consumers_pronouns: string;
  consumers_key: string;
  consumers_email: string;
}

export interface provider {
  providers_address_country: string;
  providers_name: string;
  providers_key: string;
  providers_email: string;
  services_key: string[];
}

export interface service {
  services_duration: string;
  services_cost: string;
  services_title: string;
  services_descriptions: string;
  services_key: string;
  consumers_key: string[];
}

export interface booking {
  key: string;
  start: Date;
  startTime: number;
  endTime: number;
  end: Date;
  notes: string|null;
  consumer_key: string,
  consumers_booking_code: number;
  providers_key: string;
  services_key: string;
}
