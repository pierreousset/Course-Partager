import { Platform } from "react-native";
import { Haptic } from "expo";

export default universalHaptic =  {
  notification (type) {
      console.log('====================================');
      console.log("OS : ", Platform.OS);
      console.log('====================================');
    if (Platform.OS !== "ios") {
      return;
    }

    Haptic.notification(type);
  },
  selection () {
    if (Platform.OS !== "ios") {
      return;
    }
    Haptic.selection();
  },
  impact (type) {
    if (Platform.OS !== "ios") {
      return;
    }

    Haptic.impact(type);
  },
};