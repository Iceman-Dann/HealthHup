import { customProfile as customProfileDefault } from "profiles";
import cloneObject from "utils/clone-object";
import regions from "constants/regions";

export const defaultActivities = {
  drawerVisible: false,
  promptingSignup: false,
  selectingRegion: false,
  settingProfile: false,
  viewingDirections: false,
  viewingMapInfo: false,
  viewingRoute: false,
  viewingRouteInfo: false
};

export const defaultAnalytics = {
  enabled: true
};

export const defaultAuth = {
  accessToken: null,
  displayName: null,
  isLoggedIn: false,
  refreshToken: null,
  sub: null
};

export const defaultBrowser = {
  displayMode: "landscape",
  mediaType: null,
  mapWidth: null,
  mapHeight: null
};

export const defaultGeolocation = null;

export const defaultLinkOverlay = null;

export const defaultLog = {
  bounds: null
};

export const defaultMap = {
  inclineUphill: true,
  loaded: false,
  region: regions.features[0],
  selectedFeature: null
};

export const defaultProfile = {
  filter: ["Custom", "Wheelchair", "Powered", "Cane"],
  custom: cloneObject(customProfileDefault),
  selected: "Custom",
  editorMode: "UPHILL"
};

export const defaultToasts = [];

export const defaultRoute = {
  fetchingRoute: false,
  routeResult: null
};

export const defaultRouteSettings = {
  dateTime: new Date().getTime()
};

export const defaultTour = {
  enabled: false,
  tips: true
};

export const defaultView = {
  mapWidth: null,
  mapHeight: null
};

export const defaultWaypoints = {
  destination: null,
  origin: null,
  poi: null
};
