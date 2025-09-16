import { db } from "../database/db.js";

export const getRole = async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    if (!userId) {
      return res.status(400).json({ message: "user_id is required" });
    }

    const [userRoles] = await db.query(
      `SELECT r.role_name 
       FROM roles r 
       JOIN user_roles ur ON r.role_id = ur.role_id 
       WHERE ur.user_id = ?`,
      [userId]
    );

    if (userRoles.length === 0) {
      return res.status(404).json({ message: "No roles found for this user" });
    }
    const userRoleNames = userRoles.map((role) => role.role_name);
    console.log(userRoleNames);
    return res.status(200).json({
      message: "User roles fetched successfully",
      roles: userRoleNames
    });

  } catch (error) {

    next(error);
  }
};
