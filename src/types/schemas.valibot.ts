import { array, object, string, number, InferOutput } from 'valibot';

// Eclipses Data
export const EclipseDataSchema = object({
  ecl_type: string(),
  calendar_year: number(),
  calendar_month: string(),
  calendar_day: number(),
  catalog_number: number(),
});
export const EclipsesDataSchema = array(EclipseDataSchema);
export type EclipseData = InferOutput<typeof EclipseDataSchema>;
