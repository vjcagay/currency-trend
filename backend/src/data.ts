const data: { date: string; quotes: { [x: string]: number } }[] = [
  { date: "2022-10-01", quotes: { USDJPY: 144.655314, USDSGD: 1.436295, USDEUR: 1.025851 } },
  { date: "2022-10-02", quotes: { USDJPY: 144.655314, USDSGD: 1.436295, USDEUR: 1.025851 } },
  { date: "2022-10-03", quotes: { USDJPY: 144.909873, USDSGD: 1.435375, USDEUR: 1.02417 } },
  { date: "2022-10-04", quotes: { USDJPY: 144.879183, USDSGD: 1.430391, USDEUR: 1.01102 } },
  { date: "2022-10-05", quotes: { USDJPY: 144.407463, USDSGD: 1.424508, USDEUR: 1.008573 } },
  { date: "2022-10-06", quotes: { USDJPY: 144.705882, USDSGD: 1.425659, USDEUR: 1.014199 } },
  { date: "2022-10-07", quotes: { USDJPY: 144.860672, USDSGD: 1.428601, USDEUR: 1.020721 } },
  { date: "2022-10-08", quotes: { USDJPY: 144.860672, USDSGD: 1.428601, USDEUR: 1.020721 } },
  { date: "2022-10-09", quotes: { USDJPY: 144.860672, USDSGD: 1.428601, USDEUR: 1.020721 } },
  { date: "2022-10-10", quotes: { USDJPY: 145.570795, USDSGD: 1.437455, USDEUR: 1.031247 } },
  { date: "2022-10-11", quotes: { USDJPY: 145.572354, USDSGD: 1.436491, USDEUR: 1.028489 } },
  { date: "2022-10-12", quotes: { USDJPY: 146.651556, USDSGD: 1.436328, USDEUR: 1.030291 } },
  { date: "2022-10-13", quotes: { USDJPY: 146.770716, USDSGD: 1.432283, USDEUR: 1.026799 } },
  { date: "2022-10-14", quotes: { USDJPY: 147.813111, USDSGD: 1.425543, USDEUR: 1.029124 } },
  { date: "2022-10-15", quotes: { USDJPY: 147.813111, USDSGD: 1.425543, USDEUR: 1.029124 } },
  { date: "2022-10-16", quotes: { USDJPY: 147.813111, USDSGD: 1.425543, USDEUR: 1.029124 } },
  { date: "2022-10-17", quotes: { USDJPY: 148.885923, USDSGD: 1.426841, USDEUR: 1.026799 } },
  { date: "2022-10-18", quotes: { USDJPY: 149.11032, USDSGD: 1.419725, USDEUR: 1.016777 } },
  { date: "2022-10-19", quotes: { USDJPY: 149.662508, USDSGD: 1.424729, USDEUR: 1.022704 } },
  { date: "2022-10-20", quotes: { USDJPY: 149.821629, USDSGD: 1.422791, USDEUR: 1.019264 } },
  { date: "2022-10-21", quotes: { USDJPY: 151.685509, USDSGD: 1.430319, USDEUR: 1.027749 } },
  { date: "2022-10-22", quotes: { USDJPY: 151.685509, USDSGD: 1.430319, USDEUR: 1.027749 } },
  { date: "2022-10-23", quotes: { USDJPY: 151.685509, USDSGD: 1.430319, USDEUR: 1.027749 } },
  { date: "2022-10-24", quotes: { USDJPY: 148.979799, USDSGD: 1.421988, USDEUR: 1.015125 } },
  { date: "2022-10-25", quotes: { USDJPY: 148.909847, USDSGD: 1.424805, USDEUR: 1.014096 } },
  { date: "2022-10-26", quotes: { USDJPY: 146.981942, USDSGD: 1.407164, USDEUR: 0.997705 } },
  { date: "2022-10-27", quotes: { USDJPY: 146.826741, USDSGD: 1.410182, USDEUR: 0.996314 } },
  { date: "2022-10-28", quotes: { USDJPY: 147.512813, USDSGD: 1.412421, USDEUR: 1.004924 } },
  { date: "2022-10-29", quotes: { USDJPY: 147.512813, USDSGD: 1.412421, USDEUR: 1.004924 } },
  { date: "2022-10-30", quotes: { USDJPY: 147.512813, USDSGD: 1.412421, USDEUR: 1.004924 } },
  { date: "2022-10-31", quotes: { USDJPY: 148.678636, USDSGD: 1.415977, USDEUR: 1.008675 } },
  { date: "2022-11-01", quotes: { USDJPY: 147.129788, USDSGD: 1.409169, USDEUR: 1.005328 } },
  { date: "2022-11-02", quotes: { USDJPY: 147.103351, USDSGD: 1.411284, USDEUR: 1.009285 } },
  { date: "2022-11-03", quotes: { USDJPY: 148.241567, USDSGD: 1.422947, USDEUR: 1.025326 } },
  { date: "2022-11-04", quotes: { USDJPY: 147.072528, USDSGD: 1.407111, USDEUR: 1.012966 } },
  { date: "2022-11-05", quotes: { USDJPY: 147.072528, USDSGD: 1.407111, USDEUR: 1.012966 } },
  { date: "2022-11-06", quotes: { USDJPY: 147.072528, USDSGD: 1.407111, USDEUR: 1.012966 } },
  { date: "2022-11-07", quotes: { USDJPY: 146.282398, USDSGD: 1.403182, USDEUR: 1.0007 } },
  { date: "2022-11-08", quotes: { USDJPY: 146.308523, USDSGD: 1.402761, USDEUR: 1.0004 } },
  { date: "2022-11-09", quotes: { USDJPY: 146.249626, USDSGD: 1.400638, USDEUR: 0.996115 } },
  { date: "2022-11-10", quotes: { USDJPY: 146.142254, USDSGD: 1.402753, USDEUR: 1.004621 } },
  { date: "2022-11-11", quotes: { USDJPY: 139.590609, USDSGD: 1.377474, USDEUR: 0.97012 } },
  { date: "2022-11-12", quotes: { USDJPY: 139.590609, USDSGD: 1.377474, USDEUR: 0.97012 } },
  { date: "2022-11-13", quotes: { USDJPY: 139.590609, USDSGD: 1.377474, USDEUR: 0.97012 } },
  { date: "2022-11-14", quotes: { USDJPY: 140.38182, USDSGD: 1.373873, USDEUR: 0.969086 } },
  { date: "2022-11-15", quotes: { USDJPY: 139.215686, USDSGD: 1.368512, USDEUR: 0.961169 } },
  { date: "2022-11-16", quotes: { USDJPY: 139.540914, USDSGD: 1.368613, USDEUR: 0.96043 } },
  { date: "2022-11-17", quotes: { USDJPY: 140.323675, USDSGD: 1.378137, USDEUR: 0.969086 } },
  { date: "2022-11-18", quotes: { USDJPY: 139.996141, USDSGD: 1.372661, USDEUR: 0.964692 } },
  { date: "2022-11-19", quotes: { USDJPY: 139.996141, USDSGD: 1.372661, USDEUR: 0.964692 } },
  { date: "2022-11-20", quotes: { USDJPY: 139.996141, USDSGD: 1.372661, USDEUR: 0.964692 } },
  { date: "2022-11-21", quotes: { USDJPY: 141.840718, USDSGD: 1.382198, USDEUR: 0.975991 } },
  { date: "2022-11-22", quotes: { USDJPY: 141.327623, USDSGD: 1.378918, USDEUR: 0.973331 } },
  { date: "2022-11-23", quotes: { USDJPY: 141.162228, USDSGD: 1.384504, USDEUR: 0.968523 } },
  { date: "2022-11-24", quotes: { USDJPY: 138.192644, USDSGD: 1.375108, USDEUR: 0.960338 } },
  { date: "2022-11-25", quotes: { USDJPY: 139.392771, USDSGD: 1.376096, USDEUR: 0.963855 } },
  { date: "2022-11-26", quotes: { USDJPY: 139.392771, USDSGD: 1.376096, USDEUR: 0.963855 } },
  { date: "2022-11-27", quotes: { USDJPY: 139.392771, USDSGD: 1.376096, USDEUR: 0.963855 } },
  { date: "2022-11-28", quotes: { USDJPY: 138.488005, USDSGD: 1.373889, USDEUR: 0.955749 } },
  { date: "2022-11-29", quotes: { USDJPY: 138.298283, USDSGD: 1.373432, USDEUR: 0.964692 } },
  { date: "2022-11-30", quotes: { USDJPY: 139.051658, USDSGD: 1.366615, USDEUR: 0.963763 } },
  { date: "2022-12-01", quotes: { USDJPY: 136.292328, USDSGD: 1.357853, USDEUR: 0.956572 } },
  { date: "2022-12-02", quotes: { USDJPY: 134.105143, USDSGD: 1.350066, USDEUR: 0.948947 } },
  { date: "2022-12-03", quotes: { USDJPY: 134.105143, USDSGD: 1.350066, USDEUR: 0.948947 } },
  { date: "2022-12-04", quotes: { USDJPY: 134.105143, USDSGD: 1.350066, USDEUR: 0.948947 } },
  { date: "2022-12-05", quotes: { USDJPY: 135.137433, USDSGD: 1.347974, USDEUR: 0.944555 } },
  { date: "2022-12-06", quotes: { USDJPY: 136.297071, USDSGD: 1.356314, USDEUR: 0.950932 } },
  { date: "2022-12-07", quotes: { USDJPY: 137.183018, USDSGD: 1.356824, USDEUR: 0.949758 } },
  { date: "2022-12-08", quotes: { USDJPY: 136.657477, USDSGD: 1.355262, USDEUR: 0.950661 } },
  { date: "2022-12-09", quotes: { USDJPY: 135.713609, USDSGD: 1.350507, USDEUR: 0.947059 } },
  { date: "2022-12-10", quotes: { USDJPY: 135.713609, USDSGD: 1.350507, USDEUR: 0.947059 } },
  { date: "2022-12-11", quotes: { USDJPY: 135.713609, USDSGD: 1.350507, USDEUR: 0.947059 } },
  { date: "2022-12-12", quotes: { USDJPY: 137.152055, USDSGD: 1.352395, USDEUR: 0.94679 } },
  { date: "2022-12-13", quotes: { USDJPY: 137.363679, USDSGD: 1.354955, USDEUR: 0.948317 } },
  { date: "2022-12-14", quotes: { USDJPY: 134.923467, USDSGD: 1.34745, USDEUR: 0.939055 } },
  { date: "2022-12-15", quotes: { USDJPY: 136.587892, USDSGD: 1.356369, USDEUR: 0.941531 } },
  { date: "2022-12-16", quotes: { USDJPY: 137.046803, USDSGD: 1.357284, USDEUR: 0.941708 } },
  { date: "2022-12-17", quotes: { USDJPY: 137.046803, USDSGD: 1.357284, USDEUR: 0.941708 } },
  { date: "2022-12-18", quotes: { USDJPY: 137.046803, USDSGD: 1.357284, USDEUR: 0.941708 } },
  { date: "2022-12-19", quotes: { USDJPY: 136.488017, USDSGD: 1.356671, USDEUR: 0.943574 } },
  { date: "2022-12-20", quotes: { USDJPY: 132.635154, USDSGD: 1.353618, USDEUR: 0.943485 } },
  { date: "2022-12-21", quotes: { USDJPY: 131.901091, USDSGD: 1.350696, USDEUR: 0.940203 } },
  { date: "2022-12-22", quotes: { USDJPY: 132.060566, USDSGD: 1.350136, USDEUR: 0.940468 } },
  { date: "2022-12-23", quotes: { USDJPY: 132.611561, USDSGD: 1.349746, USDEUR: 0.941442 } },
  { date: "2022-12-24", quotes: { USDJPY: 132.611561, USDSGD: 1.349746, USDEUR: 0.941442 } },
  { date: "2022-12-25", quotes: { USDJPY: 132.611561, USDSGD: 1.349746, USDEUR: 0.941442 } },
  { date: "2022-12-26", quotes: { USDJPY: 132.611561, USDSGD: 1.349746, USDEUR: 0.941442 } },
  { date: "2022-12-27", quotes: { USDJPY: 133.358434, USDSGD: 1.346009, USDEUR: 0.941265 } },
  { date: "2022-12-28", quotes: { USDJPY: 133.656015, USDSGD: 1.346147, USDEUR: 0.93985 } },
  { date: "2022-12-29", quotes: { USDJPY: 133.571227, USDSGD: 1.348483, USDEUR: 0.939055 } },
  { date: "2022-12-30", quotes: { USDJPY: 131.876992, USDSGD: 1.340709, USDEUR: 0.937559 } },
  { date: "2022-12-31", quotes: { USDJPY: 131.876992, USDSGD: 1.340709, USDEUR: 0.937559 } },
  { date: "2023-01-01", quotes: { USDJPY: 131.876992, USDSGD: 1.340709, USDEUR: 0.937559 } },
  { date: "2023-01-02", quotes: { USDJPY: 130.693625, USDSGD: 1.340822, USDEUR: 0.936067 } },
  { date: "2023-01-03", quotes: { USDJPY: 130.801328, USDSGD: 1.345472, USDEUR: 0.948317 } },
  { date: "2023-01-04", quotes: { USDJPY: 130.899141, USDSGD: 1.340881, USDEUR: 0.943485 } },
  { date: "2023-01-05", quotes: { USDJPY: 132.959155, USDSGD: 1.340723, USDEUR: 0.943307 } },
  { date: "2023-01-06", quotes: { USDJPY: 134.571429, USDSGD: 1.34819, USDEUR: 0.952381 } },
  { date: "2023-01-07", quotes: { USDJPY: 134.571429, USDSGD: 1.34819, USDEUR: 0.952381 } },
  { date: "2023-01-08", quotes: { USDJPY: 134.571429, USDSGD: 1.34819, USDEUR: 0.952381 } },
  { date: "2023-01-09", quotes: { USDJPY: 132.152206, USDSGD: 1.331713, USDEUR: 0.934929 } },
  { date: "2023-01-10", quotes: { USDJPY: 132.351021, USDSGD: 1.332649, USDEUR: 0.932575 } },
  { date: "2023-01-11", quotes: { USDJPY: 132.697497, USDSGD: 1.332093, USDEUR: 0.930492 } },
  { date: "2023-01-12", quotes: { USDJPY: 130.532863, USDSGD: 1.328351, USDEUR: 0.928333 } },
  { date: "2023-01-13", quotes: { USDJPY: 128.555576, USDSGD: 1.323377, USDEUR: 0.924727 } },
  { date: "2023-01-14", quotes: { USDJPY: 128.555576, USDSGD: 1.323377, USDEUR: 0.924727 } },
  { date: "2023-01-15", quotes: { USDJPY: 128.555576, USDSGD: 1.323377, USDEUR: 0.924727 } },
  { date: "2023-01-16", quotes: { USDJPY: 128.486866, USDSGD: 1.321495, USDEUR: 0.924898 } },
  { date: "2023-01-17", quotes: { USDJPY: 128.654431, USDSGD: 1.322789, USDEUR: 0.922254 } },
  { date: "2023-01-18", quotes: { USDJPY: 128.969462, USDSGD: 1.317465, USDEUR: 0.922594 } },
  { date: "2023-01-19", quotes: { USDJPY: 128.543689, USDSGD: 1.324642, USDEUR: 0.924642 } },
  { date: "2023-01-20", quotes: { USDJPY: 130.112692, USDSGD: 1.32191, USDEUR: 0.923702 } },
  { date: "2023-01-21", quotes: { USDJPY: 130.112692, USDSGD: 1.32191, USDEUR: 0.923702 } },
  { date: "2023-01-22", quotes: { USDJPY: 130.112692, USDSGD: 1.32191, USDEUR: 0.923702 } },
  { date: "2023-01-23", quotes: { USDJPY: 130.3008, USDSGD: 1.318002, USDEUR: 0.919879 } },
  { date: "2023-01-24", quotes: { USDJPY: 130.29103, USDSGD: 1.320409, USDEUR: 0.92098 } },
  { date: "2023-01-25", quotes: { USDJPY: 129.775694, USDSGD: 1.315223, USDEUR: 0.919287 } },
  { date: "2023-01-26", quotes: { USDJPY: 129.765948, USDSGD: 1.311794, USDEUR: 0.917852 } },
  { date: "2023-01-27", quotes: { USDJPY: 129.866544, USDSGD: 1.314036, USDEUR: 0.920387 } },
  { date: "2023-01-28", quotes: { USDJPY: 129.866544, USDSGD: 1.314036, USDEUR: 0.920387 } },
  { date: "2023-01-29", quotes: { USDJPY: 129.866544, USDSGD: 1.314036, USDEUR: 0.920387 } },
  { date: "2023-01-30", quotes: { USDJPY: 130.046776, USDSGD: 1.312483, USDEUR: 0.917179 } },
  { date: "2023-01-31", quotes: { USDJPY: 130.407089, USDSGD: 1.317087, USDEUR: 0.923105 } },
  { date: "2023-02-01", quotes: { USDJPY: 129.76868, USDSGD: 1.312925, USDEUR: 0.917936 } },
  { date: "2023-02-02", quotes: { USDJPY: 128.431016, USDSGD: 1.306152, USDEUR: 0.910084 } },
  { date: "2023-02-03", quotes: { USDJPY: 128.417299, USDSGD: 1.310323, USDEUR: 0.914328 } },
  { date: "2023-02-04", quotes: { USDJPY: 128.417299, USDSGD: 1.310323, USDEUR: 0.914328 } },
  { date: "2023-02-05", quotes: { USDJPY: 128.417299, USDSGD: 1.310323, USDEUR: 0.914328 } },
  { date: "2023-02-06", quotes: { USDJPY: 132.154788, USDSGD: 1.323868, USDEUR: 0.927988 } },
  { date: "2023-02-07", quotes: { USDJPY: 132.056075, USDSGD: 1.327009, USDEUR: 0.934579 } },
  { date: "2023-02-08", quotes: { USDJPY: 131.169073, USDSGD: 1.324639, USDEUR: 0.931532 } },
  { date: "2023-02-09", quotes: { USDJPY: 130.721381, USDSGD: 1.32179, USDEUR: 0.928419 } },
  { date: "2023-02-10", quotes: { USDJPY: 130.851263, USDSGD: 1.328251, USDEUR: 0.935454 } },
  { date: "2023-02-11", quotes: { USDJPY: 130.851263, USDSGD: 1.328251, USDEUR: 0.935454 } },
  { date: "2023-02-12", quotes: { USDJPY: 130.851263, USDSGD: 1.328251, USDEUR: 0.935454 } },
  { date: "2023-02-13", quotes: { USDJPY: 132.556616, USDSGD: 1.331555, USDEUR: 0.935804 } },
  { date: "2023-02-14", quotes: { USDJPY: 132.11265, USDSGD: 1.326331, USDEUR: 0.929454 } },
  { date: "2023-02-15", quotes: { USDJPY: 133.691589, USDSGD: 1.335047, USDEUR: 0.934579 } },
  { date: "2023-02-16", quotes: { USDJPY: 133.934579, USDSGD: 1.335234, USDEUR: 0.934579 } },
  { date: "2023-02-17", quotes: { USDJPY: 134.757647, USDSGD: 1.339388, USDEUR: 0.941176 } },
  { date: "2023-02-18", quotes: { USDJPY: 134.757647, USDSGD: 1.339388, USDEUR: 0.941176 } },
  { date: "2023-02-19", quotes: { USDJPY: 134.757647, USDSGD: 1.339388, USDEUR: 0.941176 } },
  { date: "2023-02-20", quotes: { USDJPY: 134.054712, USDSGD: 1.335863, USDEUR: 0.936856 } },
  { date: "2023-02-21", quotes: { USDJPY: 134.808702, USDSGD: 1.338335, USDEUR: 0.937734 } },
  { date: "2023-02-22", quotes: { USDJPY: 134.573469, USDSGD: 1.33897, USDEUR: 0.939496 } },
  { date: "2023-02-23", quotes: { USDJPY: 135.003768, USDSGD: 1.342219, USDEUR: 0.941974 } },
  { date: "2023-02-24", quotes: { USDJPY: 135.808893, USDSGD: 1.347114, USDEUR: 0.946074 } },
  { date: "2023-02-25", quotes: { USDJPY: 135.808893, USDSGD: 1.347114, USDEUR: 0.946074 } },
  { date: "2023-02-26", quotes: { USDJPY: 135.808893, USDSGD: 1.347114, USDEUR: 0.946074 } },
  { date: "2023-02-27", quotes: { USDJPY: 136.327459, USDSGD: 1.34982, USDEUR: 0.947508 } },
  { date: "2023-02-28", quotes: { USDJPY: 136.76429, USDSGD: 1.347961, USDEUR: 0.941708 } },
  { date: "2023-03-01", quotes: { USDJPY: 135.548484, USDSGD: 1.339948, USDEUR: 0.935979 } },
  { date: "2023-03-02", quotes: { USDJPY: 136.793965, USDSGD: 1.349081, USDEUR: 0.942951 } },
  { date: "2023-03-03", quotes: { USDJPY: 136.175224, USDSGD: 1.346773, USDEUR: 0.942063 } },
  { date: "2023-03-04", quotes: { USDJPY: 136.175224, USDSGD: 1.346773, USDEUR: 0.942063 } },
  { date: "2023-03-05", quotes: { USDJPY: 136.175224, USDSGD: 1.346773, USDEUR: 0.942063 } },
  { date: "2023-03-06", quotes: { USDJPY: 135.863235, USDSGD: 1.345482, USDEUR: 0.93932 } },
  { date: "2023-03-07", quotes: { USDJPY: 136.155649, USDSGD: 1.346179, USDEUR: 0.937647 } },
  { date: "2023-03-08", quotes: { USDJPY: 137.221432, USDSGD: 1.353153, USDEUR: 0.948317 } },
  { date: "2023-03-09", quotes: { USDJPY: 136.270608, USDSGD: 1.352947, USDEUR: 0.947508 } },
  { date: "2023-03-10", quotes: { USDJPY: 136.689968, USDSGD: 1.355469, USDEUR: 0.944644 } },
  { date: "2023-03-11", quotes: { USDJPY: 136.689968, USDSGD: 1.355469, USDEUR: 0.944644 } },
  { date: "2023-03-12", quotes: { USDJPY: 136.689968, USDSGD: 1.355469, USDEUR: 0.944644 } },
  { date: "2023-03-13", quotes: { USDJPY: 132.598543, USDSGD: 1.348776, USDEUR: 0.934056 } },
  { date: "2023-03-14", quotes: { USDJPY: 134.199497, USDSGD: 1.343765, USDEUR: 0.931359 } },
  { date: "2023-03-15", quotes: { USDJPY: 132.249502, USDSGD: 1.350365, USDEUR: 0.947957 } },
  { date: "2023-03-16", quotes: { USDJPY: 132.307692, USDSGD: 1.347428, USDEUR: 0.943841 } },
  { date: "2023-03-17", quotes: { USDJPY: 132.326085, USDSGD: 1.342559, USDEUR: 0.941354 } },
  { date: "2023-03-18", quotes: { USDJPY: 132.326085, USDSGD: 1.342559, USDEUR: 0.941354 } },
  { date: "2023-03-19", quotes: { USDJPY: 132.326085, USDSGD: 1.342559, USDEUR: 0.941354 } },
  { date: "2023-03-20", quotes: { USDJPY: 131.352057, USDSGD: 1.339367, USDEUR: 0.933097 } },
  { date: "2023-03-21", quotes: { USDJPY: 132.358946, USDSGD: 1.335561, USDEUR: 0.927988 } },
  { date: "2023-03-22", quotes: { USDJPY: 132.7121, USDSGD: 1.334353, USDEUR: 0.927214 } },
  { date: "2023-03-23", quotes: { USDJPY: 131.326409, USDSGD: 1.326776, USDEUR: 0.919202 } },
  { date: "2023-03-24", quotes: { USDJPY: 130.15356, USDSGD: 1.333644, USDEUR: 0.930665 } },
  { date: "2023-03-25", quotes: { USDJPY: 130.15356, USDSGD: 1.333644, USDEUR: 0.930665 } },
  { date: "2023-03-26", quotes: { USDJPY: 130.15356, USDSGD: 1.333644, USDEUR: 0.930665 } },
  { date: "2023-03-27", quotes: { USDJPY: 131.47684, USDSGD: 1.332127, USDEUR: 0.928247 } },
  { date: "2023-03-28", quotes: { USDJPY: 130.698275, USDSGD: 1.327737, USDEUR: 0.922424 } },
  { date: "2023-03-29", quotes: { USDJPY: 132.368397, USDSGD: 1.329861, USDEUR: 0.921914 } },
  { date: "2023-03-30", quotes: { USDJPY: 132.665809, USDSGD: 1.328771, USDEUR: 0.918611 } },
  { date: "2023-03-31", quotes: { USDJPY: 133.177011, USDSGD: 1.330023, USDEUR: 0.91954 } },
  { date: "2023-04-01", quotes: { USDJPY: 133.177011, USDSGD: 1.330023, USDEUR: 0.91954 } },
  { date: "2023-04-02", quotes: { USDJPY: 133.177011, USDSGD: 1.330023, USDEUR: 0.91954 } },
  { date: "2023-04-03", quotes: { USDJPY: 132.943882, USDSGD: 1.330635, USDEUR: 0.919963 } },
  { date: "2023-04-04", quotes: { USDJPY: 132.960279, USDSGD: 1.327126, USDEUR: 0.917347 } },
  { date: "2023-04-05", quotes: { USDJPY: 131.389397, USDSGD: 1.326508, USDEUR: 0.914077 } },
  { date: "2023-04-06", quotes: { USDJPY: 131.461292, USDSGD: 1.329088, USDEUR: 0.91617 } },
  { date: "2023-04-07", quotes: { USDJPY: 131.461292, USDSGD: 1.329088, USDEUR: 0.91617 } },
  { date: "2023-04-08", quotes: { USDJPY: 131.461292, USDSGD: 1.329088, USDEUR: 0.91617 } },
  { date: "2023-04-09", quotes: { USDJPY: 131.461292, USDSGD: 1.329088, USDEUR: 0.91617 } },
  { date: "2023-04-10", quotes: { USDJPY: 131.461292, USDSGD: 1.329088, USDEUR: 0.91617 } },
  { date: "2023-04-11", quotes: { USDJPY: 133.223292, USDSGD: 1.33205, USDEUR: 0.917011 } },
  { date: "2023-04-12", quotes: { USDJPY: 133.757554, USDSGD: 1.331075, USDEUR: 0.915583 } },
  { date: "2023-04-13", quotes: { USDJPY: 133.281888, USDSGD: 1.324739, USDEUR: 0.907853 } },
  { date: "2023-04-14", quotes: { USDJPY: 132.585692, USDSGD: 1.326309, USDEUR: 0.904404 } },
  { date: "2023-04-15", quotes: { USDJPY: 132.585692, USDSGD: 1.326309, USDEUR: 0.904404 } },
  { date: "2023-04-16", quotes: { USDJPY: 132.585692, USDSGD: 1.326309, USDEUR: 0.904404 } },
  { date: "2023-04-17", quotes: { USDJPY: 133.84027, USDSGD: 1.330935, USDEUR: 0.910664 } },
  { date: "2023-04-18", quotes: { USDJPY: 133.877142, USDSGD: 1.331936, USDEUR: 0.911411 } },
  { date: "2023-04-19", quotes: { USDJPY: 134.674838, USDSGD: 1.336779, USDEUR: 0.914662 } },
  { date: "2023-04-20", quotes: { USDJPY: 134.740497, USDSGD: 1.333973, USDEUR: 0.913743 } },
  { date: "2023-04-21", quotes: { USDJPY: 133.831299, USDSGD: 1.334578, USDEUR: 0.910913 } },
  { date: "2023-04-22", quotes: { USDJPY: 133.831299, USDSGD: 1.334578, USDEUR: 0.910913 } },
  { date: "2023-04-23", quotes: { USDJPY: 133.831299, USDSGD: 1.334578, USDEUR: 0.910913 } },
  { date: "2023-04-24", quotes: { USDJPY: 134.675514, USDSGD: 1.334666, USDEUR: 0.908926 } },
  { date: "2023-04-25", quotes: { USDJPY: 134.195246, USDSGD: 1.336872, USDEUR: 0.907276 } },
  { date: "2023-04-26", quotes: { USDJPY: 133.771175, USDSGD: 1.335719, USDEUR: 0.905879 } },
  { date: "2023-04-27", quotes: { USDJPY: 133.272958, USDSGD: 1.335718, USDEUR: 0.905633 } },
  { date: "2023-04-28", quotes: { USDJPY: 136.00765, USDSGD: 1.336764, USDEUR: 0.910664 } },
  { date: "2023-04-29", quotes: { USDJPY: 136.00765, USDSGD: 1.336764, USDEUR: 0.910664 } },
  { date: "2023-04-30", quotes: { USDJPY: 136.00765, USDSGD: 1.336764, USDEUR: 0.910664 } },
  { date: "2023-05-01", quotes: { USDJPY: 136.00765, USDSGD: 1.336764, USDEUR: 0.910664 } },
  { date: "2023-05-02", quotes: { USDJPY: 137.437301, USDSGD: 1.335705, USDEUR: 0.911993 } },
  { date: "2023-05-03", quotes: { USDJPY: 135.524767, USDSGD: 1.331522, USDEUR: 0.905551 } },
  { date: "2023-05-04", quotes: { USDJPY: 134.477154, USDSGD: 1.326982, USDEUR: 0.903016 } },
  { date: "2023-05-05", quotes: { USDJPY: 134.192845, USDSGD: 1.325586, USDEUR: 0.907935 } },
  { date: "2023-05-06", quotes: { USDJPY: 134.192845, USDSGD: 1.325586, USDEUR: 0.907935 } },
  { date: "2023-05-07", quotes: { USDJPY: 134.192845, USDSGD: 1.325586, USDEUR: 0.907935 } },
  { date: "2023-05-08", quotes: { USDJPY: 135.13636, USDSGD: 1.324635, USDEUR: 0.906043 } },
  { date: "2023-05-09", quotes: { USDJPY: 135.021444, USDSGD: 1.327128, USDEUR: 0.912492 } },
  { date: "2023-05-10", quotes: { USDJPY: 135.324201, USDSGD: 1.327945, USDEUR: 0.913242 } },
  { date: "2023-05-11", quotes: { USDJPY: 134.071363, USDSGD: 1.327539, USDEUR: 0.914913 } },
  { date: "2023-05-12", quotes: { USDJPY: 134.979802, USDSGD: 1.334374, USDEUR: 0.918105 } },
  { date: "2023-05-13", quotes: { USDJPY: 134.979802, USDSGD: 1.334374, USDEUR: 0.918105 } },
  { date: "2023-05-14", quotes: { USDJPY: 134.979802, USDSGD: 1.334374, USDEUR: 0.918105 } },
  { date: "2023-05-15", quotes: { USDJPY: 136.217359, USDSGD: 1.337624, USDEUR: 0.919456 } },
  { date: "2023-05-16", quotes: { USDJPY: 135.915817, USDSGD: 1.336734, USDEUR: 0.919033 } },
  { date: "2023-05-17", quotes: { USDJPY: 136.956321, USDSGD: 1.342876, USDEUR: 0.923446 } },
  { date: "2023-05-18", quotes: { USDJPY: 137.871081, USDSGD: 1.345048, USDEUR: 0.924813 } },
  { date: "2023-05-19", quotes: { USDJPY: 138.369726, USDSGD: 1.345115, USDEUR: 0.925241 } },
  { date: "2023-05-20", quotes: { USDJPY: 138.369726, USDSGD: 1.345115, USDEUR: 0.925241 } },
  { date: "2023-05-21", quotes: { USDJPY: 138.369726, USDSGD: 1.345115, USDEUR: 0.925241 } },
  { date: "2023-05-22", quotes: { USDJPY: 138.273887, USDSGD: 1.344853, USDEUR: 0.924044 } },
  { date: "2023-05-23", quotes: { USDJPY: 138.417293, USDSGD: 1.347713, USDEUR: 0.92773 } },
  { date: "2023-05-24", quotes: { USDJPY: 138.433009, USDSGD: 1.346871, USDEUR: 0.927214 } },
  { date: "2023-05-25", quotes: { USDJPY: 139.385189, USDSGD: 1.352119, USDEUR: 0.931532 } },
  { date: "2023-05-26", quotes: { USDJPY: 139.74514, USDSGD: 1.350572, USDEUR: 0.930146 } },
  { date: "2023-05-27", quotes: { USDJPY: 139.74514, USDSGD: 1.350572, USDEUR: 0.930146 } },
  { date: "2023-05-28", quotes: { USDJPY: 139.74514, USDSGD: 1.350572, USDEUR: 0.930146 } },
  { date: "2023-05-29", quotes: { USDJPY: 140.261316, USDSGD: 1.35315, USDEUR: 0.933271 } },
  { date: "2023-05-30", quotes: { USDJPY: 139.622115, USDSGD: 1.34959, USDEUR: 0.930752 } },
  { date: "2023-05-31", quotes: { USDJPY: 139.595619, USDSGD: 1.354208, USDEUR: 0.936067 } },
  { date: "2023-06-01", quotes: { USDJPY: 139.5251, USDSGD: 1.352342, USDEUR: 0.934842 } },
  { date: "2023-06-02", quotes: { USDJPY: 138.864629, USDSGD: 1.344792, USDEUR: 0.929109 } },
  { date: "2023-06-03", quotes: { USDJPY: 138.864629, USDSGD: 1.344792, USDEUR: 0.929109 } },
  { date: "2023-06-04", quotes: { USDJPY: 138.864629, USDSGD: 1.344792, USDEUR: 0.929109 } },
  { date: "2023-06-05", quotes: { USDJPY: 140.280636, USDSGD: 1.351824, USDEUR: 0.935454 } },
  { date: "2023-06-06", quotes: { USDJPY: 139.558177, USDSGD: 1.348966, USDEUR: 0.936067 } },
  { date: "2023-06-07", quotes: { USDJPY: 139.423346, USDSGD: 1.346646, USDEUR: 0.933097 } },
  { date: "2023-06-08", quotes: { USDJPY: 139.685201, USDSGD: 1.346745, USDEUR: 0.931359 } },
  { date: "2023-06-09", quotes: { USDJPY: 139.369202, USDSGD: 1.343228, USDEUR: 0.927644 } },
  { date: "2023-06-10", quotes: { USDJPY: 139.369202, USDSGD: 1.343228, USDEUR: 0.927644 } },
  { date: "2023-06-11", quotes: { USDJPY: 139.369202, USDSGD: 1.343228, USDEUR: 0.927644 } },
  { date: "2023-06-12", quotes: { USDJPY: 139.368323, USDSGD: 1.342963, USDEUR: 0.928936 } },
  { date: "2023-06-13", quotes: { USDJPY: 139.553414, USDSGD: 1.340406, USDEUR: 0.926526 } },
  { date: "2023-06-14", quotes: { USDJPY: 139.892682, USDSGD: 1.341382, USDEUR: 0.925155 } },
  { date: "2023-06-15", quotes: { USDJPY: 141.288474, USDSGD: 1.344209, USDEUR: 0.9243 } },
  { date: "2023-06-16", quotes: { USDJPY: 141.02681, USDSGD: 1.335674, USDEUR: 0.91191 } },
  { date: "2023-06-17", quotes: { USDJPY: 141.02681, USDSGD: 1.335674, USDEUR: 0.91191 } },
  { date: "2023-06-18", quotes: { USDJPY: 141.02681, USDSGD: 1.335674, USDEUR: 0.91191 } },
  { date: "2023-06-19", quotes: { USDJPY: 141.860465, USDSGD: 1.340963, USDEUR: 0.915583 } },
  { date: "2023-06-20", quotes: { USDJPY: 141.324431, USDSGD: 1.343456, USDEUR: 0.914662 } },
  { date: "2023-06-21", quotes: { USDJPY: 141.801703, USDSGD: 1.34377, USDEUR: 0.915499 } },
  { date: "2023-06-22", quotes: { USDJPY: 142.057351, USDSGD: 1.341921, USDEUR: 0.910332 } },
  { date: "2023-06-23", quotes: { USDJPY: 143.182653, USDSGD: 1.352995, USDEUR: 0.91878 } },
  { date: "2023-06-24", quotes: { USDJPY: 143.182653, USDSGD: 1.352995, USDEUR: 0.91878 } },
  { date: "2023-06-25", quotes: { USDJPY: 143.182653, USDSGD: 1.352995, USDEUR: 0.91878 } },
  { date: "2023-06-26", quotes: { USDJPY: 143.258839, USDSGD: 1.352354, USDEUR: 0.915919 } },
  { date: "2023-06-27", quotes: { USDJPY: 143.493745, USDSGD: 1.348461, USDEUR: 0.913159 } },
  { date: "2023-06-28", quotes: { USDJPY: 144.285975, USDSGD: 1.35299, USDEUR: 0.914244 } },
  { date: "2023-06-29", quotes: { USDJPY: 144.212836, USDSGD: 1.352167, USDEUR: 0.914244 } },
  { date: "2023-06-30", quotes: { USDJPY: 144.63464, USDSGD: 1.355789, USDEUR: 0.920302 } },
  { date: "2023-07-01", quotes: { USDJPY: 144.63464, USDSGD: 1.355789, USDEUR: 0.920302 } },
  { date: "2023-07-02", quotes: { USDJPY: 144.63464, USDSGD: 1.355789, USDEUR: 0.920302 } },
  { date: "2023-07-03", quotes: { USDJPY: 144.7931, USDSGD: 1.352051, USDEUR: 0.917515 } },
  { date: "2023-07-04", quotes: { USDJPY: 144.414869, USDSGD: 1.348692, USDEUR: 0.917852 } },
  { date: "2023-07-05", quotes: { USDJPY: 144.553727, USDSGD: 1.352514, USDEUR: 0.919202 } },
  { date: "2023-07-06", quotes: { USDJPY: 143.655381, USDSGD: 1.349849, USDEUR: 0.917515 } },
  { date: "2023-07-07", quotes: { USDJPY: 143.286187, USDSGD: 1.351672, USDEUR: 0.918442 } },
  { date: "2023-07-08", quotes: { USDJPY: 143.286187, USDSGD: 1.351672, USDEUR: 0.918442 } },
  { date: "2023-07-09", quotes: { USDJPY: 143.286187, USDSGD: 1.351672, USDEUR: 0.918442 } },
  { date: "2023-07-10", quotes: { USDJPY: 142.141292, USDSGD: 1.348394, USDEUR: 0.912742 } },
  { date: "2023-07-11", quotes: { USDJPY: 140.38584, USDSGD: 1.342069, USDEUR: 0.910001 } },
  { date: "2023-07-12", quotes: { USDJPY: 139.575395, USDSGD: 1.338323, USDEUR: 0.907276 } },
  { date: "2023-07-13", quotes: { USDJPY: 138.472545, USDSGD: 1.324987, USDEUR: 0.894294 } },
  { date: "2023-07-14", quotes: { USDJPY: 138.588361, USDSGD: 1.320738, USDEUR: 0.891186 } },
  { date: "2023-07-15", quotes: { USDJPY: 138.588361, USDSGD: 1.320738, USDEUR: 0.891186 } },
  { date: "2023-07-16", quotes: { USDJPY: 138.588361, USDSGD: 1.320738, USDEUR: 0.891186 } },
  { date: "2023-07-17", quotes: { USDJPY: 138.361532, USDSGD: 1.321371, USDEUR: 0.890472 } },
  { date: "2023-07-18", quotes: { USDJPY: 138.071968, USDSGD: 1.320835, USDEUR: 0.888494 } },
  { date: "2023-07-19", quotes: { USDJPY: 139.689895, USDSGD: 1.325521, USDEUR: 0.891107 } },
  { date: "2023-07-20", quotes: { USDJPY: 139.635617, USDSGD: 1.322408, USDEUR: 0.893096 } },
  { date: "2023-07-21", quotes: { USDJPY: 141.715365, USDSGD: 1.329857, USDEUR: 0.899038 } },
  { date: "2023-07-22", quotes: { USDJPY: 141.715365, USDSGD: 1.329857, USDEUR: 0.899038 } },
  { date: "2023-07-23", quotes: { USDJPY: 141.715365, USDSGD: 1.329857, USDEUR: 0.899038 } },
  { date: "2023-07-24", quotes: { USDJPY: 141.01478, USDSGD: 1.330389, USDEUR: 0.901226 } },
  { date: "2023-07-25", quotes: { USDJPY: 141.326577, USDSGD: 1.328115, USDEUR: 0.904895 } },
  { date: "2023-07-26", quotes: { USDJPY: 140.42861, USDSGD: 1.327606, USDEUR: 0.904241 } },
  { date: "2023-07-27", quotes: { USDJPY: 140.179775, USDSGD: 1.323775, USDEUR: 0.898876 } },
  { date: "2023-07-28", quotes: { USDJPY: 139.28247, USDSGD: 1.330881, USDEUR: 0.908265 } },
  { date: "2023-07-29", quotes: { USDJPY: 139.28247, USDSGD: 1.330881, USDEUR: 0.908265 } },
  { date: "2023-07-30", quotes: { USDJPY: 139.28247, USDSGD: 1.330881, USDEUR: 0.908265 } },
  { date: "2023-07-31", quotes: { USDJPY: 142.184523, USDSGD: 1.329946, USDEUR: 0.907194 } },
  { date: "2023-08-01", quotes: { USDJPY: 142.980857, USDSGD: 1.33464, USDEUR: 0.911577 } },
  { date: "2023-08-02", quotes: { USDJPY: 142.812927, USDSGD: 1.337551, USDEUR: 0.910332 } },
  { date: "2023-08-03", quotes: { USDJPY: 142.919868, USDSGD: 1.342664, USDEUR: 0.914746 } },
  { date: "2023-08-04", quotes: { USDJPY: 142.618308, USDSGD: 1.343048, USDEUR: 0.913576 } },
  { date: "2023-08-05", quotes: { USDJPY: 142.618308, USDSGD: 1.343048, USDEUR: 0.913576 } },
  { date: "2023-08-06", quotes: { USDJPY: 142.618308, USDSGD: 1.343048, USDEUR: 0.913576 } },
  { date: "2023-08-07", quotes: { USDJPY: 142.21595, USDSGD: 1.341042, USDEUR: 0.910415 } },
  { date: "2023-08-08", quotes: { USDJPY: 143.046418, USDSGD: 1.349232, USDEUR: 0.913743 } },
  { date: "2023-08-09", quotes: { USDJPY: 143.462801, USDSGD: 1.345824, USDEUR: 0.911743 } },
  { date: "2023-08-10", quotes: { USDJPY: 143.778927, USDSGD: 1.345494, USDEUR: 0.907523 } },
  { date: "2023-08-11", quotes: { USDJPY: 144.465649, USDSGD: 1.349509, USDEUR: 0.90876 } },
  { date: "2023-08-12", quotes: { USDJPY: 144.465649, USDSGD: 1.349509, USDEUR: 0.90876 } },
  { date: "2023-08-13", quotes: { USDJPY: 144.465649, USDSGD: 1.349509, USDEUR: 0.90876 } },
  { date: "2023-08-14", quotes: { USDJPY: 145.178408, USDSGD: 1.355261, USDEUR: 0.914913 } },
  { date: "2023-08-15", quotes: { USDJPY: 145.561047, USDSGD: 1.357221, USDEUR: 0.915248 } },
  { date: "2023-08-16", quotes: { USDJPY: 145.721876, USDSGD: 1.357823, USDEUR: 0.916086 } },
  { date: "2023-08-17", quotes: { USDJPY: 145.761468, USDSGD: 1.357156, USDEUR: 0.917431 } },
  { date: "2023-08-18", quotes: { USDJPY: 145.495537, USDSGD: 1.357412, USDEUR: 0.920217 } },
  { date: "2023-08-19", quotes: { USDJPY: 145.495537, USDSGD: 1.357412, USDEUR: 0.920217 } },
  { date: "2023-08-20", quotes: { USDJPY: 145.495537, USDSGD: 1.357412, USDEUR: 0.920217 } },
  { date: "2023-08-21", quotes: { USDJPY: 145.90209, USDSGD: 1.355977, USDEUR: 0.916758 } },
  { date: "2023-08-22", quotes: { USDJPY: 145.770185, USDSGD: 1.355194, USDEUR: 0.918527 } },
  { date: "2023-08-23", quotes: { USDJPY: 145.56224, USDSGD: 1.358353, USDEUR: 0.925497 } },
  { date: "2023-08-24", quotes: { USDJPY: 145.719557, USDSGD: 1.354336, USDEUR: 0.922509 } },
  { date: "2023-08-25", quotes: { USDJPY: 145.956699, USDSGD: 1.354645, USDEUR: 0.925241 } },
  { date: "2023-08-26", quotes: { USDJPY: 145.956699, USDSGD: 1.354645, USDEUR: 0.925241 } },
  { date: "2023-08-27", quotes: { USDJPY: 145.956699, USDSGD: 1.354645, USDEUR: 0.925241 } },
  { date: "2023-08-28", quotes: { USDJPY: 146.511843, USDSGD: 1.35631, USDEUR: 0.925241 } },
  { date: "2023-08-29", quotes: { USDJPY: 147.116542, USDSGD: 1.356012, USDEUR: 0.925669 } },
  { date: "2023-08-30", quotes: { USDJPY: 146.19695, USDSGD: 1.352471, USDEUR: 0.918611 } },
  { date: "2023-08-31", quotes: { USDJPY: 145.8318, USDSGD: 1.351307, USDEUR: 0.920132 } },
  { date: "2023-09-01", quotes: { USDJPY: 145.213943, USDSGD: 1.350055, USDEUR: 0.922169 } },
  { date: "2023-09-02", quotes: { USDJPY: 145.213943, USDSGD: 1.350055, USDEUR: 0.922169 } },
  { date: "2023-09-03", quotes: { USDJPY: 145.213943, USDSGD: 1.350055, USDEUR: 0.922169 } },
  { date: "2023-09-04", quotes: { USDJPY: 146.384594, USDSGD: 1.353764, USDEUR: 0.92584 } },
  { date: "2023-09-05", quotes: { USDJPY: 147.423353, USDSGD: 1.361849, USDEUR: 0.93188 } },
  { date: "2023-09-06", quotes: { USDJPY: 147.212657, USDSGD: 1.361005, USDEUR: 0.930665 } },
  { date: "2023-09-07", quotes: { USDJPY: 147.245565, USDSGD: 1.364426, USDEUR: 0.933707 } },
  { date: "2023-09-08", quotes: { USDJPY: 147.458894, USDSGD: 1.364443, USDEUR: 0.93423 } },
  { date: "2023-09-09", quotes: { USDJPY: 147.458894, USDSGD: 1.364443, USDEUR: 0.93423 } },
  { date: "2023-09-10", quotes: { USDJPY: 147.458894, USDSGD: 1.364443, USDEUR: 0.93423 } },
  { date: "2023-09-11", quotes: { USDJPY: 146.549795, USDSGD: 1.360873, USDEUR: 0.932488 } },
  { date: "2023-09-12", quotes: { USDJPY: 146.942966, USDSGD: 1.36255, USDEUR: 0.933445 } },
  { date: "2023-09-13", quotes: { USDJPY: 147.470418, USDSGD: 1.361688, USDEUR: 0.931706 } },
  { date: "2023-09-14", quotes: { USDJPY: 147.371855, USDSGD: 1.360764, USDEUR: 0.931966 } },
  { date: "2023-09-15", quotes: { USDJPY: 147.776318, USDSGD: 1.362732, USDEUR: 0.938262 } },
  { date: "2023-09-16", quotes: { USDJPY: 147.776318, USDSGD: 1.362732, USDEUR: 0.938262 } },
  { date: "2023-09-17", quotes: { USDJPY: 147.776318, USDSGD: 1.362732, USDEUR: 0.938262 } },
  { date: "2023-09-18", quotes: { USDJPY: 147.650755, USDSGD: 1.364625, USDEUR: 0.937822 } },
  { date: "2023-09-19", quotes: { USDJPY: 147.671054, USDSGD: 1.362457, USDEUR: 0.933445 } },
  { date: "2023-09-20", quotes: { USDJPY: 147.897589, USDSGD: 1.362456, USDEUR: 0.934405 } },
  { date: "2023-09-21", quotes: { USDJPY: 147.945463, USDSGD: 1.36897, USDEUR: 0.940291 } },
  { date: "2023-09-22", quotes: { USDJPY: 148.27651, USDSGD: 1.36461, USDEUR: 0.939232 } },
  { date: "2023-09-23", quotes: { USDJPY: 148.27651, USDSGD: 1.36461, USDEUR: 0.939232 } },
  { date: "2023-09-24", quotes: { USDJPY: 148.27651, USDSGD: 1.36461, USDEUR: 0.939232 } },
  { date: "2023-09-25", quotes: { USDJPY: 148.669237, USDSGD: 1.365936, USDEUR: 0.940468 } },
  { date: "2023-09-26", quotes: { USDJPY: 148.863744, USDSGD: 1.36728, USDEUR: 0.942951 } },
  { date: "2023-09-27", quotes: { USDJPY: 149.202733, USDSGD: 1.371393, USDEUR: 0.949127 } },
  { date: "2023-09-28", quotes: { USDJPY: 149.283613, USDSGD: 1.369295, USDEUR: 0.948857 } },
  { date: "2023-09-29", quotes: { USDJPY: 149.235416, USDSGD: 1.363319, USDEUR: 0.943931 } },
  { date: "2023-09-30", quotes: { USDJPY: 149.235416, USDSGD: 1.363319, USDEUR: 0.943931 } },
  { date: "2023-10-01", quotes: { USDJPY: 149.235416, USDSGD: 1.363319, USDEUR: 0.943931 } },
  { date: "2023-10-02", quotes: { USDJPY: 149.734093, USDSGD: 1.372175, USDEUR: 0.949668 } },
  { date: "2023-10-03", quotes: { USDJPY: 149.97612, USDSGD: 1.374821, USDEUR: 0.955201 } },
  { date: "2023-10-04", quotes: { USDJPY: 149.128261, USDSGD: 1.373519, USDEUR: 0.954606 } },
];
export default data;
