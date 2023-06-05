var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Area";
unit[0] = new Array(
  "Square meter (m^2)",
  "Acre (acre)",
  "Are",
  "Barn (barn)",
  "Hectare",
  "Rood",
  "Square centimeter",
  "Square kilometer",
  "Circular mil",
  "Square foot (ft^2)",
  "Square inch (in^2)",
  "Square mile (mi^2)",
  "Square yard (yd^2)"
);
factor[0] = new Array(
  1,
  4046.856,
  100,
  1e-28,
  10000,
  1011.71413184285,
  0.0001,
  1000000,
  5.067075e-10,
  9.290304e-2,
  6.4516e-4,
  2589988,
  0.8361274
);

property[1] = "Electricity";
unit[1] = new Array(
  "Coulomb (Cb)",
  "Abcoulomb",
  "Ampere hour (A hr)",
  "Faraday (F)",
  "Statcoulomb",
  "Millifaraday (mF)",
  "Microfaraday (mu-F)",
  "Picofaraday (pF)"
);
factor[1] = new Array(
  1,
  10,
  3600,
  96521.8999999997,
  0.000000000333564,
  96.5219,
  9.65219e-2,
  9.65219e-5
);

property[2] = "Force";
unit[2] = new Array(
  "Newton (N)",
  "Dyne (dy)",
  "Kilogram force (kgf)",
  "Kilopond force (kpf)",
  "Kip (k)",
  "Ounce force (ozf)",
  "Pound force (lbf)",
  "Poundal"
);
factor[2] = new Array(
  1,
  0.00001,
  9.80665,
  9.80665,
  4448.222,
  0.2780139,
  0.4535924,
  0.138255
);

property[3] = "Length";
unit[3] = new Array(
  "Meter (m)",
  "Angstrom (A')",
  "Astronomical unit (AU)",
  "Caliber (cal)",
  "Centimeter (cm)",
  "Kilometer (km)",
  "Ell",
  "Em",
  "Fathom",
  "Furlong",
  "Fermi (fm)",
  "Foot (ft)",
  "Inch (in)",
  "League (int'l)",
  "League (UK)",
  "Light year (LY)",
  "Micrometer (mu-m)",
  "Mil",
  "Millimeter (mm)",
  "Nanometer (nm)",
  "Mile (int'l nautical)",
  "Mile (UK nautical)",
  "Mile (US nautical)",
  "Mile (US statute)",
  "Parsec",
  "Pica (printer)",
  "Picometer (pm)",
  "Point (pt)",
  "Rod",
  "Yard (yd)"
);
factor[3] = new Array(
  1,
  1e-10,
  1.49598e11,
  0.000254,
  0.01,
  1000,
  1.143,
  4.2323e-3,
  1.8288,
  201.168,
  1e-15,
  0.3048,
  0.0254,
  5556,
  5556,
  9.46055e15,
  0.000001,
  0.0000254,
  0.001,
  1e-9,
  1852,
  1853.184,
  1852,
  1609.344,
  3.08374e16,
  4.217518e-3,
  1e-12,
  0.0003514598,
  5.0292,
  0.9144
);

property[4] = "Mass";
unit[4] = new Array(
  "Kilogram (kgr)",
  "Gram (gr)",
  "Milligram (mgr)",
  "Microgram (mu-gr)",
  "Carat (metric)(ct)",
  "Hundredweight (long)",
  "Hundredweight (short)",
  "Pound mass (lbm)",
  "Pound mass (troy)",
  "Ounce mass (ozm)",
  "Ounce mass (troy)",
  "Slug",
  "Ton (assay)",
  "Ton (long)",
  "Ton (short)",
  "Ton (metric)",
  "Tonne"
);
factor[4] = new Array(
  1,
  0.001,
  1e-6,
  0.000000001,
  0.0002,
  50.80235,
  45.35924,
  0.4535924,
  0.3732417,
  0.02834952,
  0.03110348,
  14.5939,
  0.02916667,
  1016.047,
  907.1847,
  1000,
  1000
);

property[5] = "Temperature";
unit[5] = new Array(
  "Degrees Celsius ('C)",
  "Degrees Fahrenheit ('F)",
  "Degrees Kelvin ('K)",
  "Degrees Rankine ('R)"
);
factor[5] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[6] = "Time";
unit[6] = new Array(
  "Second (sec)",
  "Day (mean solar)",
  "Day (sidereal)",
  "Hour (mean solar)",
  "Hour (sidereal)",
  "Minute (mean solar)",
  "Minute (sidereal)",
  "Month (mean calendar)",
  "Second (sidereal)",
  "Year (calendar)",
  "Year (tropical)",
  "Year (sidereal)"
);
factor[6] = new Array(
  1,
  8.64e4,
  86164.09,
  3600,
  3590.17,
  60,
  60,
  2628000,
  0.9972696,
  31536000,
  31556930,
  31558150
);

property[7] = "Velocity & Speed";
unit[7] = new Array(
  "Meter/second (m/sec)",
  "Foot/minute (ft/min)",
  "Foot/second (ft/sec)",
  "Kilometer/hour (kph)",
  "Knot (int'l)",
  "Mile (US)/hour (mph)",
  "Mile (nautical)/hour",
  "Mile (US)/minute",
  "Mile (US)/second",
  "Speed of light (c)",
  "Mach (STP)(a)"
);
factor[7] = new Array(
  1,
  5.08e-3,
  0.3048,
  0.2777778,
  0.5144444,
  0.44707,
  0.514444,
  26.8224,
  1609.344,
  299792458,
  340.006875
);

property[8] = "Volume & Capacity";
unit[8] = new Array(
  "Cubic Meter (m^3)",
  "Cubic centimeter",
  "Cubic millimeter",
  "Acre-foot",
  "Barrel (oil)",
  "Board foot",
  "Bushel (US)",
  "Cup",
  "Fluid ounce (US)",
  "Cubic foot",
  "Gallon (UK)",
  "Gallon (US,dry)",
  "Gallon (US,liq)",
  "Gill (UK)",
  "Gill (US)",
  "Cubic inch (in^3)",
  "Liter (new)",
  "Liter (old)",
  "Ounce (UK,fluid)",
  "Ounce (US,fluid)",
  "Peck (US)",
  "Pint (US,dry)",
  "Pint (US,liq)",
  "Quart (US,dry)",
  "Quart (US,liq)",
  "Stere",
  "Tablespoon",
  "Teaspoon",
  "Ton (register)",
  "Cubic yard"
);
factor[8] = new Array(
  1,
  0.000001,
  0.000000001,
  1233.482,
  0.1589873,
  0.002359737,
  0.03523907,
  0.0002365882,
  0.00002957353,
  0.02831685,
  0.004546087,
  0.004404884,
  0.003785412,
  0.0001420652,
  0.0001182941,
  0.00001638706,
  0.001,
  0.001000028,
  0.00002841305,
  0.00002957353,
  8.809768e-3,
  0.0005506105,
  4.731765e-4,
  0.001101221,
  9.46353e-4,
  1,
  0.00001478676,
  0.000004928922,
  2.831685,
  0.7645549
);

property[9] = "Volume Flow";
unit[9] = new Array(
  "Cubic meter/second",
  "Cubic foot/second",
  "Cubic foot/minute",
  "Cubic inches/minute",
  "Gallons (US,liq)/minute)"
);
factor[9] = new Array(1, 0.02831685, 0.0004719474, 2.731177e-7, 6.30902e-5);

function UpdateUnitMenu(propMenu, unitMenu) {
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  var sourceValue = sourceForm.unit_input.value;

  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  propIndex = document.property_form.the_menu.selectedIndex;

  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

  result = sourceForm.unit_input.value;

  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

  result = result / targetFactor;

  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }


  targetForm.unit_input.value = result;
}

window.onload = function (e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
};

document
  .getElementByClass("numbersonly")
  .addEventListener("keydown", function (e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (
      !(
        (
          [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key == 65 && (e.ctrlKey || e.metaKey)) || 
          (key == 67 && (e.ctrlKey || e.metaKey)) || 
          (key == 86 && (e.ctrlKey || e.metaKey)) || 
          (key >= 35 && key <= 40) || 
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || 
          (key >= 96 && key <= 105)(
            key == 190
          )
        ) 
      )
    )
      e.preventDefault();
  });
