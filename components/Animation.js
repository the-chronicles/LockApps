// import { keyframes, stagger } from "popmotion";
// import { Animated, StyleSheet, Text, View } from "react-native";
// import { theme } from "../utils/theme";

// const COUNT = 5;
// const DURATION = 4000;
// const initialPhase = { scale: 0, opacity: 1 };
// const constructAnimations = () => [...Array(COUNT).keys()].map(() => initialPhase);

// function Animation() {
//   state = {
//     animations: constructAnimations(),
//   };

//   componentDidMount() {
//     this.animateCircles();
//   }

//   animateCircles = () => {
//     const actions = Array(COUNT).fill(
//       keyframes({
//         values: [initialPhase, { scale: 2, opacity: 0 }],
//         duration: DURATION,
//         loop: Infinity,
//         yoyo: Infinity,
//       })
//     );

//     stagger(actions, DURATION / COUNT).start((animations) => {
//       this.setState({ animations });
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {this.state.animations.map(({ opacity, scale }, index) => {
//         return (
//           <Animated.View
//             key={index}
//             style={[
//               styles.circle,
//               {
//                 transform: [{ scale }],
//                 opacity,
//               },
//             ]}
//           />
//         );
//       })}
//       <View>
//         <Text>
//             Calling...
//         </Text>
//       </View>
//     </View>
//   );
// }

// const getCircle = (radius, backgroundColor='theme.color.primary') => ({
//     backgroundColor,
//     width: radius * 2,
//     height: radius * 2,
//     borderRadius: radius,
// position: 'absolute'
// })

// export default Animation;

// const styles = StyleSheet.create({
//   circle:getCircle(100),
// midCircle:{
//     ...getCircle(75),
// alignItems: 'center',
// justifyContent: 'center'
// },
//   container: {
//     flex: 1
//   }
// });


import React, { useEffect, useState } from "react";
import { keyframes, stagger } from "popmotion";
import { Animated, StyleSheet, View } from "react-native";
import { theme } from "../utils/theme";

const COUNT = 5;
const DURATION = 4000;
const initialPhase = { scale: 0, opacity: 1 };
const constructAnimations = () => [...Array(COUNT).keys()].map(() => initialPhase);

function Animation() {
  const [animations, setAnimations] = useState(constructAnimations());

  useEffect(() => {
    animateCircles();
  }, []);

  const animateCircles = () => {
    const actions = Array(COUNT).fill(
      keyframes({
        values: [initialPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity,
      })
    );

    stagger(actions, DURATION / COUNT).start((animations) => {
      setAnimations(animations);
    });
  };

  return (
    <View style={styles.container}>
      {animations.map(({ opacity, scale }, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                transform: [{ scale }],
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export default Animation;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: theme.colors.primary,
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute'
  },
  container: {
    flex: 1
  }
});

