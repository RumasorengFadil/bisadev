import { CountryUser } from "./countryUser";
import { PageViewStats } from "./pageViewStats";
import { VisitorDeviceChartData } from "./visitorDeviceChartData ";

export interface AnalyticsData {
  activeUsersStats: PageViewStats;
  pageViewStats: PageViewStats;
  chartData: Array<{ date: string; users: number }>;
  visitorDeviceChartData: Array<VisitorDeviceChartData>;
  countryActiveUsers: Array<CountryUser>;
}