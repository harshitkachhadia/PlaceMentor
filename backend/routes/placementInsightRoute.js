import {Router} from "express"
import {createPlacementInsightData,deletePlacementInsightData,getPlacementInsightData, updatePlacementInsightData} from "../controllers/placementInsightController.js";
import auth from "../middleware/auth.js";

const placementInsightRoute = Router();

placementInsightRoute.post("/addExperiance",auth,createPlacementInsightData)
placementInsightRoute.get("/data",getPlacementInsightData)
placementInsightRoute.put("/update/:placementId",auth,updatePlacementInsightData)
placementInsightRoute.delete("/delete/:placementId",auth,deletePlacementInsightData)

export default placementInsightRoute;