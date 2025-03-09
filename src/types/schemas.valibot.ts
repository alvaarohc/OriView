import { array, object, string, number } from 'valibot';

export const EclipseDataResponseSchema = array(
  object({
    ecl_type: string(),
    calendar_year: number(),
    calendar_month: string(),
    calendar_day: number(),
    catalog_number: number(),
  })
);

