import { getLimitsForPackage } from "../config/plan.limit.js";

function getCurrentPeriod() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function checkRepairLimit(tenant) {
  const currentPeriod = getCurrentPeriod();
  if (tenant.usage.period !== currentPeriod) {
    tenant.usage.repairsUsed = 0;
    tenant.usage.period = currentPeriod;
  }

  const limit = getLimitsForPackage(tenant.plan).repairsLimit;
  const current = tenant.usage.repairsUsed;

  return { allowed: limit === Infinity || current < limit, current, limit };
}