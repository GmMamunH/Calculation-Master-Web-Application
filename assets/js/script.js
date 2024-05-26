const output = document.getElementById("result");

const addSubmit = document.getElementById("addBtn");

const addNum1 = document.getElementById("addNum1");

const addNum2 = document.getElementById("addNum2");

addSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!addNum1.value || !addNum2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const addCal = (a, b) => {
      const sum = a + b;
      return sum;
    };

    const result = addCal(parseInt(addNum1.value), parseInt(addNum2.value));

    output.innerHTML = `Output addition between two numbers:- 
    
    <br/> <br/> 
    
    The summation of the two numbers is: ${result} 
    
    <br/> <br/> 
    
    Calculate: ${addNum1.value} + ${addNum2.value} = ${result}`;

    addNum1.value = "";
    addNum2.value = "";
  }
});
//  <!-- ===== two addition numbers calculate end ===== -->

const subSubmit = document.getElementById("subBtn");

const subNum1 = document.getElementById("subNum1");

const subNum2 = document.getElementById("subNum2");

subSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!subNum1.value || !subNum2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const subCal = (a, b) => {
      const sub = a - b;
      return sub;
    };

    const result = subCal(parseInt(subNum1.value), parseInt(subNum2.value));

    output.innerHTML = `Output subtraction between two numbers:- 
    
    <br/> <br/> 
    
    The subtraction of the two numbers is: ${result} 
    
    <br/> <br/> 
    
    Calculate: ${subNum1.value} - ${subNum2.value} = ${result}  `;

    subNum1.value = "";
    subNum2.value = "";
  }
});
// <!-- ===== two subtraction numbers calculate end ===== -->

const divSubmit = document.getElementById("divBtn");

const divNum1 = document.getElementById("divNum1");

const divNum2 = document.getElementById("divNum2");

divSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!divNum1.value || !divNum2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const divCal = (a, b) => {
      const div = a / b;
      return div;
    };

    const result = divCal(parseInt(divNum1.value), parseInt(divNum2.value));

    output.innerHTML = `Output division between two numbers:- 
    
    <br/> <br/> 
    
    The division of the two numbers is: ${result}
    
    <br/> <br/> 
    
    Calculate: ${divNum1.value} / ${divNum2.value} = ${result}  `;

    divNum1.value = "";
    divNum2.value = "";
  }
});
// <!-- ===== two division numbers calculate end ===== -->

const mulSubmit = document.getElementById("mulBtn");

const mulNum1 = document.getElementById("mulNum1");

const mulNum2 = document.getElementById("mulNum2");

mulSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!mulNum1.value || !mulNum2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const mulCal = (a, b) => {
      const mul = a * b;
      return mul;
    };

    const result = mulCal(parseInt(mulNum1.value), parseInt(mulNum2.value));

    output.innerHTML = `Output multiplication between two numbers:- 
    
    <br/> <br/> 
    
    The multiplication of the two numbers is: ${result}
    
    <br/> <br/>
    
    Calculate: ${mulNum1.value} * ${mulNum2.value} = ${result}  `;

    mulNum1.value = "";
    mulNum2.value = "";
  }
});
// <!-- ===== two multiplication numbers calculate end ===== -->

const remSubmit = document.getElementById("remBtn");

const remNum1 = document.getElementById("remNum1");

const remNum2 = document.getElementById("remNum2");

remSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!remNum1.value || !remNum2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const remCal = (a, b) => {
      const rem = a % b;
      return rem;
    };

    const result = remCal(parseInt(remNum1.value), parseInt(remNum2.value));

    output.innerHTML = `Output remainder between two numbers:- 
    
    <br/> <br/> 
    
    The remainder of the two numbers is: ${result}.
    
    <br/> <br/> 
    
    Calculate: ${remNum1.value} % ${remNum2.value} = ${result}  `;

    remNum1.value = "";
    remNum2.value = "";
  }
});
// <!-- ===== two remainder numbers calculate end ===== -->

const intSubmit = document.getElementById("intBtn");

const intNum1 = document.getElementById("intNum1");

const intNum2 = document.getElementById("intNum2");

const intNum3 = document.getElementById("intNum3");

intSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!intNum1.value || !intNum2.value || !intNum3.value) {
    alert("Please, enter a valuable number...");
  } else {
    const intCal = (a, b, c) => {
      // const rate = b/100;
      const int = a * (b / 100) * c;
      return int;
    };

    const result = intCal(
      parseInt(intNum1.value),
      parseInt(intNum2.value),
      parseInt(intNum3.value)
    );

    output.innerHTML = `Output  interest:- <br/> <br/> Total Interest: ${result}/-.<br/> <br/>  Calculate: (${intNum1.value} * ${intNum2.value}% * ${intNum3.value} = ${result}/- . <br/> <br/>Formula: Interest = Principal Amount * Interest Rate * Loan Term`;

    intNum1.value = "";
    intNum2.value = "";
    intNum3.value = "";
  }
});
// <!-- =====  interest calculate end ===== -->

const fahrenheitSubmit = document.getElementById("fahrenheitBtn");

const fahrenheit = document.getElementById("fahrenheit");

fahrenheitSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!fahrenheit.value) {
    alert("Please, enter a valuable number...");
  } else {
    const fahrenheitCal = (a) => {
      const fahrenheit = (a - 32) / 1.8;
      return fahrenheit;
    };

    const resultCelsius = fahrenheitCal(parseInt(fahrenheit.value));

    const result = Math.round(resultCelsius);

    output.innerHTML = `Output  Temperature:- 
    
    <br/> <br/>
    
    Temperature: ${fahrenheit.value}°F = ${result}°C.
    
    <br/> <br/>  
    
    Calculate: (${fahrenheit.value} - 32) / 1.8 = ${result}°C . 
    
    <br/><br/> 
    
    Formula: Celsius = (Fahrenheit - 32) / 1.8`;

    fahrenheit.value = "";
  }
});
// <!-- =====  Convert temperature, degrees Fahrenheit to degrees Celsius end ===== -->

const celsiusSubmit = document.getElementById("celsiusBtn");

const celsius = document.getElementById("celsius");

celsiusSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!celsius.value) {
    alert("Please, enter a valuable number...");
  } else {
    const celsiusCal = (a) => {
      const celsius = a * 1.8 + 32;
      return celsius;
    };

    const resultFahrenheit = celsiusCal(parseInt(celsius.value));

    const result = Math.round(resultFahrenheit);

    output.innerHTML = `Output  Temperature:- 
    
    <br/> <br/> 
    
    Temperature: ${celsius.value}°C = ${result}°F.
    
    <br/> <br/>  
    
    Calculate: (${celsius.value} * 1.8) + 32 = ${result}°C . 
    <br/> <br/>
    
    Formula: Fahrenheit = (celsius * 1.8) + 32`;

    celsius.value = "";
  }
});
// <!-- =====  Convert temperature, degrees Fahrenheit to degrees Celsius end ===== -->

const areaCircleSubmit = document.getElementById("areaCircleBtn");

const areaCircle = document.getElementById("areaCircle");

areaCircleSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaCircle.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaCircleCal = (r) => {
      const pi = Math.PI;
      const piF = pi.toFixed(4);
      const areaCircle = piF * (r * r);
      return areaCircle;
    };

    const result = areaCircleCal(parseInt(areaCircle.value));

    output.innerHTML = `Output  Area Of Circle:- 
    
    <br/> <br/> 
    
    Area of circle: ${result} cm/sq ft. 
    
    <br/> <br/> 
    Calculate: π * (${areaCircle.value} * ${areaCircle.value} ) = ${result} cm/sq ft 
    
    <br/> <br/>
    
    Formula: A = πr<sup>2</sup>`;

    areaCircle.value = "";
  }
});
// <!-- =====  Area of Circle calculator end ===== -->

const areaRectSubmit = document.getElementById("areaRectBtn");

const areaRectLength = document.getElementById("areaRectLength");

const areaRectWidth = document.getElementById("areaRectWidth");

areaRectSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaRectLength.value || !areaRectWidth.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaRectCal = (l, w) => {
      const areaRectangle = l * w;
      return areaRectangle;
    };

    const result = areaRectCal(
      parseInt(areaRectLength.value),
      parseInt(areaRectWidth.value)
    );

    output.innerHTML = `Output  Area Of Rectangle:- 
    
    <br/> <br/> 
    
    Area of Rectangle: ${result} cm/sq ft.
    
    <br/> <br/>  
    
    Calculate: (${areaRectWidth.value} * ${areaRectLength.value}) = ${result} cm/sq ft 
    
    <br/> <br/>
    
    Formula: A = wl (Width * Length)`;

    areaRectWidth.value = "";
    areaRectLength.value = "";
  }
});
// <!-- =====  Area of Rectangle calculator end ===== -->

const areaSquareSubmit = document.getElementById("areaSquareBtn");

const areaSquareValue = document.getElementById("areaSquareValue");

areaSquareSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaSquareValue.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaSquareCal = (a) => {
      const areaRectangle = a * a;
      return areaRectangle;
    };
    const result = areaSquareCal(parseInt(areaSquareValue.value));

    output.innerHTML = `Output  Area Of Square:- 
    
    <br/> <br/> 
    
    Area of Square: ${result} cm/sq ft .
    
    <br/> <br/>  
    
    Calculate: ${areaSquareValue.value}<sup>2</sup> = ${result} cm/sq ft 
    
    <br/> <br/>
    
    Formula: A = a<sup>2</sup> `;

    areaSquareValue.value = "";
  }
});
// <!-- =====  Area of Square calculator end ===== -->

const areaTriangleSubmit = document.getElementById("areaTriangleBtn");

const areaTriangleBase = document.getElementById("areaTriangleBase");

const areaTriangleHight = document.getElementById("areaTriangleHight");

areaTriangleSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaTriangleBase.value || !areaTriangleHight.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaTriangleCal = (b, h) => {
      const areaTriangle = (1 / 2) * b * h;
      return areaTriangle;
    };

    const result = areaTriangleCal(
      parseInt(areaTriangleBase.value),
      parseInt(areaTriangleHight.value)
    );

    output.innerHTML = `Output  Area of triangle:- 
    
    <br/> <br/> 
    
    Area of triangle: ${result} cm/sq ft .
    
    <br/> <br/>  
    
    Calculate: 1/2 * ${areaTriangleBase.value} * ${areaTriangleHight.value} = ${result} cm/sq ft 
    
    <br/> <br/>
    
    Formula: Area of triangle = 1/2 * base * height `;

    areaTriangleBase.value = "";
    areaTriangleHight.value = "";
  }
});
// <!-- =====  Area of Triangle calculator end ===== -->

const areaParalSubmit = document.getElementById("areaParalBtn");

const areaParalBase = document.getElementById("areaParalBase");

const areaParalHight = document.getElementById("areaParalHight");

areaParalSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaParalBase.value || !areaParalHight.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaParalCal = (b, h) => {
      const areaParallelogram = b * h;
      return areaParallelogram;
    };

    const result = areaParalCal(
      parseInt(areaParalBase.value),
      parseInt(areaParalHight.value)
    );

    output.innerHTML = `Output  Area of Parallelogram:- 
    
    <br/> <br/> 
    
    Area of Parallelogram: ${result} cm/sq ft .
    
    <br/> <br/>  
    
    Calculate: ${areaParalBase.value} * ${areaParalHight.value} = ${result} cm/sq ft. 
    
    <br/> <br/>
    
    Formula: Area of Parallelogram = base * height `;

    areaParalBase.value = "";
    areaParalHight.value = "";
  }
});
// <!-- =====  Area of Parallelogram calculator end ===== -->

const areaRhombusSubmit = document.getElementById("areaRhombusBtn");

const areaRhombusD1 = document.getElementById("areaRhombusD1");

const areaRhombusD2 = document.getElementById("areaRhombusD2");

areaRhombusSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaRhombusD1.value || !areaRhombusD2.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaRhombusCal = (d1, d2) => {
      const areaRhombus = (1 / 2) * d1 * d2;
      return areaRhombus;
    };

    const result = areaRhombusCal(
      parseInt(areaRhombusD1.value),
      parseInt(areaRhombusD2.value)
    );

    output.innerHTML = `Output  Area of Rhombus:- 
    
    <br/> <br/> 
    
    Area of Rhombus: ${result} cm/sq ft.
    
    <br/> <br/>  
    
    Calculate: 1/2 * ${areaRhombusD1.value} * ${areaRhombusD2.value} = ${result} cm/sq ft. 
    
    <br/> <br/>
    
    Formula: Area of Rhombus = 1/2 * d1 * d2 `;

    areaRhombusD1.value = "";
    areaRhombusD2.value = "";
  }
});
// <!-- =====  Area of Rhombus calculator end ===== -->

const areaTrapezoidSubmit = document.getElementById("areaTrapezoidBtn");

const areaTrapezoidA = document.getElementById("areaTrapezoidA");

const areaTrapezoidB = document.getElementById("areaTrapezoidB");

const areaTrapezoidHeight = document.getElementById("areaTrapezoidHeight");

areaTrapezoidSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (
    !areaTrapezoidA.value ||
    !areaTrapezoidB.value ||
    !areaTrapezoidHeight.value
  ) {
    alert("Please, enter a valuable number...");
  } else {
    const areaTrapezoidCal = (a, b, h) => {
      const areaTrapezoid = (1 / 2) * (a + b) * h;
      return areaTrapezoid;
    };

    const result = areaTrapezoidCal(
      parseInt(areaTrapezoidA.value),
      parseInt(areaTrapezoidB.value),
      parseInt(areaTrapezoidHeight.value)
    );

    output.innerHTML = `Output  Area of Trapezoid:- 
    
    <br/> <br/> 
    
    Area of Trapezoid: ${result} cm/sq ft.
    
    <br/> <br/>  
    
    Calculate: 1/2(${areaTrapezoidA.value} + ${areaTrapezoidB.value})${areaTrapezoidHeight.value} = ${result} cm/sq ft. 
    
    <br/> <br/>
    
    Formula: Area of Trapezoid = 1/2(a+b)h `;

    areaTrapezoidA.value = "";
    areaTrapezoidB.value = "";
    areaTrapezoidHeight.value = "";
  }
});
// <!-- =====  Area of Trapezoid calculator end ===== -->

const areaEllipseSubmit = document.getElementById("areaEllipseBtn");

const areaEllipseA = document.getElementById("areaEllipseA");

const areaEllipseB = document.getElementById("areaEllipseB");

areaEllipseSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaEllipseA.value || !areaEllipseB.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaEllipseCal = (a, b) => {
      const pi = Math.PI;
      const piF = pi.toFixed(4);
      const areaEllipse = piF * a * b;
      return areaEllipse;
    };

    const result = areaEllipseCal(
      parseInt(areaEllipseA.value),
      parseInt(areaEllipseB.value)
    );

    output.innerHTML = `Output  Area of Ellipse:- 
    
    <br/> <br/> 
    
    Area of Ellipse: ${result} cm/sq ft.
    
    <br/> <br/>  
    
    Calculate: Math.PI * ${areaEllipseA.value} * ${areaEllipseB.value} = ${result} cm/sq ft. 
    
    <br/> <br/>
    
    Formula: Area of Ellipse = πab `;

    areaEllipseA.value = "";
    areaEllipseB.value = "";
  }
});
// <!-- =====  Area of Ellipse calculator end ===== -->

const areaCubeSubmit = document.getElementById("areaCubeBtn");

const areaCubeA = document.getElementById("areaCubeA");

areaCubeSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  if (!areaCubeA.value) {
    alert("Please, enter a valuable number...");
  } else {
    const areaCubeCal = (a) => {
      const p = Math.pow(a, 2);
      const areaCube = 6 * p;
      return areaCube;
    };

    const result = areaCubeCal(parseInt(areaCubeA.value));

    output.innerHTML = `Output  Area of Cube:- 
    
    <br/> <br/> 
    
    Area of Cube: ${result} cm/sq ft.
    
    <br/> <br/>  
    
    Calculate: 6 * ${areaCubeA.value}<sup>2</sup> = ${result} cm/sq ft. 
    
    <br/> <br/>
    
    Formula: Area of Cube = 6a<sup>2</sup> `;

    areaCubeA.value = "";
  }
});
// <!-- =====  Area of cube calculator end ===== -->
const resultSubmit = document.getElementById("resultBtn");
const inputNumber = document.getElementById("inputNumber");

resultSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputNumber.value) {
    alert("Please enter a valid number...");
  } else {
    const resultCal = (number) => {
      if (number <= 100 && number >= 80) {
        return `Your result is "A+". <br>  মিষ্টি খাওয়াবেন নাকি খাবেন?`;
      } else if (number < 80 && number >= 70) {
        return `Your result is "A". <br>  আর একটু কষ্ট করতে হতো।`;
      } else if (number < 70 && number >= 60) {
        return `Your result is "A-". <br>  আর আফসোস করে কি হবে।`;
      } else if (number < 60 && number >= 50) {
        return `Your result is "B". <br>  পড়ার থেকে আড্ডার পরিমান বেশি ছিল।`;
      } else if (number < 50 && number >= 40) {
        return `Your result is "C". <br>  আড্ডার পরিমান বেশি ছিল।`;
      } else if (number < 40 && number >= 33) {
        return `Your result is "D". <br>  ফাঁকির পরিমান বেশি ছিল।`;
      } else if (number < 33 && number >= 0) {
        return `Your result is "F". <br>  বাবা তোমার কর্মের ফল। আর এক বার চেষ্টা কর।`;
      } else {
        return `${number} is not a valid number`;
      }
    };

    const result = resultCal(parseInt(inputNumber.value));

    output.innerHTML = `Output  Your Result:- <br/> <br/> ${result}`;

    inputNumber.value = "";
  }
});

// <!-- =====  Result calculator end ===== -->
