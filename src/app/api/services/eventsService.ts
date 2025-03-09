import axios from 'axios';
import { EclipseDataResponseSchema } from '@/types/schemas.valibot';
import { safeParse } from 'valibot';

const BASE_URL = 'https://www.datastro.eu/api/explore/v2.1/catalog/datasets';

export async function getUpcomingEclipses(endYear: number) {
  const currentYear = new Date().getFullYear();
  const query = `calendar_year>=${currentYear} AND calendar_year<=${endYear}`;
  const sorting = 'calendar_year, calendar_month, calendar_day';

  const url = `${BASE_URL}/five-millennium-catalog-of-solar-eclipses0/records?where=${encodeURIComponent(
    query
  )}&order_by=${encodeURIComponent(sorting)}&limit=-1`;

  const {
    data: { results },
  } = await axios(url);

  // Validation with Valibot before returning the data
  const result = safeParse(EclipseDataResponseSchema, results);

  if (result.success) {
    return result.output;
  }
}
