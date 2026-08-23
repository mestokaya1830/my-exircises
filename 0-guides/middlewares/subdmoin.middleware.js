import AppError from "../utils/app.error.js";
import Tenant from "../models/tenant.model.js";

const tenant = async (req, res, next) => {
  try {
    const hostname = req.hostname;

    const parts = hostname.split(".");

    if (parts.length < 3) {
      return next(
        new AppError(
          "Tenant subdomain is required",
          400,
          "TENANT_SUBDOMAIN_REQUIRED",
        ),
      );
    }

    const slug = parts[0];
    const tenant = await Tenant.findOne({
      slug,
      isActive: true,
    })
      .select("_id slug company logoPath package")
      .lean();

    if (!tenant) {
      return next(
        new AppError(
          "Tenant not found",
          404,
          "TENANT_NOT_FOUND",
        ),
      );
    }

    req.tenant = tenant;

    next();
  } catch (error) {
    next(error);
  }
};

export default tenant;
