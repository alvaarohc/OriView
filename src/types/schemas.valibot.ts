import { array, object, string, number, InferOutput } from 'valibot';

// Eclipses Data
export const EclipseDataSchema = object({
  ecl_type: string(),
  calendar_year: number(),
  calendar_month: string(),
  calendar_day: number(),
  catalog_number: number(),
  dt_s: number(),
  td_of_greatest_eclipse: array(string()),
  saros_num: number(),
  ecl_mag: number(),
});
export const EclipsesDataSchema = array(EclipseDataSchema);
export type EclipseData = InferOutput<typeof EclipseDataSchema>;
