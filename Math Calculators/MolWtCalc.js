/* MolWtCalc JavaScript Component by John McDonald */

const molWtCalc = {

	findBtnFmClk: function (cX,cY)
	// given a set of coordinates the function returns the button clicked
	// coordinates should be in the range: 0-878, 0-470
	{
		const keyWidth = 43;
		const keyHeight = 47;
		const leftMargin = 115;
		const LALeftMargin = 240;
		const topMargin = 36;
		const LATopMargin = 399;
		const gap = 1;
		
		if (cY > topMargin && cY < topMargin + keyHeight) // in first row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "H";
			else if (cX > leftMargin + 4 * keyWidth + 4 * gap && cX < leftMargin + 5 * keyWidth + 4 * gap) return "0";
			else if (cX > leftMargin + 5 * keyWidth + 5 * gap && cX < leftMargin + 6 * keyWidth + 5 * gap) return "1";
			else if (cX > leftMargin + 6 * keyWidth + 6 * gap && cX < leftMargin + 7 * keyWidth + 6 * gap) return "2";
			else if (cX > leftMargin + 7 * keyWidth + 7 * gap && cX < leftMargin + 8 * keyWidth + 7 * gap) return "3";
			else if (cX > leftMargin + 8 * keyWidth + 8 * gap && cX < leftMargin + 9 * keyWidth + 8 * gap) return "4";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "He";
		}
		if (cY > topMargin + keyHeight && cY < topMargin + 2 * keyHeight + gap) // second row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "Li";
			else if (cX > leftMargin + 1 * keyWidth + 1 * gap && cX < leftMargin + 2 * keyWidth + 1 * gap) return "Be";
			else if (cX > leftMargin + 4 * keyWidth + 4 * gap && cX < leftMargin + 5 * keyWidth + 4 * gap) return "5";
			else if (cX > leftMargin + 5 * keyWidth + 5 * gap && cX < leftMargin + 6 * keyWidth + 5 * gap) return "6";
			else if (cX > leftMargin + 6 * keyWidth + 6 * gap && cX < leftMargin + 7 * keyWidth + 6 * gap) return "7";
			else if (cX > leftMargin + 7 * keyWidth + 7 * gap && cX < leftMargin + 8 * keyWidth + 7 * gap) return "8";
			else if (cX > leftMargin + 8 * keyWidth + 8 * gap && cX < leftMargin + 9 * keyWidth + 8 * gap) return "9";
			else if (cX > leftMargin + 12 * keyWidth + 12 * gap && cX < leftMargin + 13 * keyWidth + 12 * gap) return "B";
			else if (cX > leftMargin + 13 * keyWidth + 13 * gap && cX < leftMargin + 14 * keyWidth + 13 * gap) return "C";
			else if (cX > leftMargin + 14 * keyWidth + 14 * gap && cX < leftMargin + 15 * keyWidth + 14 * gap) return "N";
			else if (cX > leftMargin + 15 * keyWidth + 15 * gap && cX < leftMargin + 16 * keyWidth + 15 * gap) return "O";
			else if (cX > leftMargin + 16 * keyWidth + 16 * gap && cX < leftMargin + 17 * keyWidth + 16 * gap) return "F";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "Ne";
		}
		if (cY > topMargin + 2 * keyHeight + 2 * gap && cY < topMargin + 3 * keyHeight + 2 * gap) // third row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "Na";
			else if (cX > leftMargin + 1 * keyWidth + 1 * gap && cX < leftMargin + 2 * keyWidth + 1 * gap) return "Mg";
			else if (cX > leftMargin + 12 * keyWidth + 12 * gap && cX < leftMargin + 13 * keyWidth + 12 * gap) return "Al";
			else if (cX > leftMargin + 13 * keyWidth + 13 * gap && cX < leftMargin + 14 * keyWidth + 13 * gap) return "Si";
			else if (cX > leftMargin + 14 * keyWidth + 14 * gap && cX < leftMargin + 15 * keyWidth + 14 * gap) return "P";
			else if (cX > leftMargin + 15 * keyWidth + 15 * gap && cX < leftMargin + 16 * keyWidth + 15 * gap) return "S";
			else if (cX > leftMargin + 16 * keyWidth + 16 * gap && cX < leftMargin + 17 * keyWidth + 16 * gap) return "Cl";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "Ar";
		}
		if (cY > topMargin + 3 * keyHeight + 3 * gap && cY < topMargin + 4 * keyHeight + 3 * gap) // fourth row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "K";
			else if (cX > leftMargin + 1 * keyWidth + 1 * gap && cX < leftMargin + 2 * keyWidth + 1 * gap) return "Ca";
			else if (cX > leftMargin + 2 * keyWidth + 2 * gap && cX < leftMargin + 3 * keyWidth + 2 * gap) return "Sc";
			else if (cX > leftMargin + 3 * keyWidth + 3 * gap && cX < leftMargin + 4 * keyWidth + 3 * gap) return "Ti";
			else if (cX > leftMargin + 4 * keyWidth + 4 * gap && cX < leftMargin + 5 * keyWidth + 4 * gap) return "V";
			else if (cX > leftMargin + 5 * keyWidth + 5 * gap && cX < leftMargin + 6 * keyWidth + 5 * gap) return "Cr";
			else if (cX > leftMargin + 6 * keyWidth + 6 * gap && cX < leftMargin + 7 * keyWidth + 6 * gap) return "Mn";
			else if (cX > leftMargin + 7 * keyWidth + 7 * gap && cX < leftMargin + 8 * keyWidth + 7 * gap) return "Fe";
			else if (cX > leftMargin + 8 * keyWidth + 8 * gap && cX < leftMargin + 9 * keyWidth + 8 * gap) return "Co";
			else if (cX > leftMargin + 9 * keyWidth + 9 * gap && cX < leftMargin + 10 * keyWidth + 9 * gap) return "Ni";
			else if (cX > leftMargin + 10 * keyWidth + 10 * gap && cX < leftMargin + 11 * keyWidth + 10 * gap) return "Cu";
			else if (cX > leftMargin + 11 * keyWidth + 11 * gap && cX < leftMargin + 12 * keyWidth + 11 * gap) return "Zn";
			else if (cX > leftMargin + 12 * keyWidth + 12 * gap && cX < leftMargin + 13 * keyWidth + 12 * gap) return "Ga";
			else if (cX > leftMargin + 13 * keyWidth + 13 * gap && cX < leftMargin + 14 * keyWidth + 13 * gap) return "Ge";
			else if (cX > leftMargin + 14 * keyWidth + 14 * gap && cX < leftMargin + 15 * keyWidth + 14 * gap) return "As";
			else if (cX > leftMargin + 15 * keyWidth + 15 * gap && cX < leftMargin + 16 * keyWidth + 15 * gap) return "Se";
			else if (cX > leftMargin + 16 * keyWidth + 16 * gap && cX < leftMargin + 17 * keyWidth + 16 * gap) return "Br";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "Kr";
		}
		if (cY > topMargin + 4 * keyHeight + 4 * gap && cY < topMargin + 5 * keyHeight + 4 * gap) // fifth row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "Rb";
			else if (cX > leftMargin + 1 * keyWidth + 1 * gap && cX < leftMargin + 2 * keyWidth + 1 * gap) return "Sr";
			else if (cX > leftMargin + 2 * keyWidth + 2 * gap && cX < leftMargin + 3 * keyWidth + 2 * gap) return "Y";
			else if (cX > leftMargin + 3 * keyWidth + 3 * gap && cX < leftMargin + 4 * keyWidth + 3 * gap) return "Zr";
			else if (cX > leftMargin + 4 * keyWidth + 4 * gap && cX < leftMargin + 5 * keyWidth + 4 * gap) return "Nb";
			else if (cX > leftMargin + 5 * keyWidth + 5 * gap && cX < leftMargin + 6 * keyWidth + 5 * gap) return "Mo";
			else if (cX > leftMargin + 6 * keyWidth + 6 * gap && cX < leftMargin + 7 * keyWidth + 6 * gap) return "Tc";
			else if (cX > leftMargin + 7 * keyWidth + 7 * gap && cX < leftMargin + 8 * keyWidth + 7 * gap) return "Ru";
			else if (cX > leftMargin + 8 * keyWidth + 8 * gap && cX < leftMargin + 9 * keyWidth + 8 * gap) return "Rh";
			else if (cX > leftMargin + 9 * keyWidth + 9 * gap && cX < leftMargin + 10 * keyWidth + 9 * gap) return "Pd";
			else if (cX > leftMargin + 10 * keyWidth + 10 * gap && cX < leftMargin + 11 * keyWidth + 10 * gap) return "Ag";
			else if (cX > leftMargin + 11 * keyWidth + 11 * gap && cX < leftMargin + 12 * keyWidth + 11 * gap) return "Cd";
			else if (cX > leftMargin + 12 * keyWidth + 12 * gap && cX < leftMargin + 13 * keyWidth + 12 * gap) return "In";
			else if (cX > leftMargin + 13 * keyWidth + 13 * gap && cX < leftMargin + 14 * keyWidth + 13 * gap) return "Sn";
			else if (cX > leftMargin + 14 * keyWidth + 14 * gap && cX < leftMargin + 15 * keyWidth + 14 * gap) return "Sb";
			else if (cX > leftMargin + 15 * keyWidth + 15 * gap && cX < leftMargin + 16 * keyWidth + 15 * gap) return "Te";
			else if (cX > leftMargin + 16 * keyWidth + 16 * gap && cX < leftMargin + 17 * keyWidth + 16 * gap) return "I";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "Xe";
		}
		if (cY > topMargin + 5 * keyHeight + 5 * gap && cY < topMargin + 6 * keyHeight + 5 * gap) // sixth row
		{
			if (cX > leftMargin && cX < leftMargin + keyWidth) return "Cs";
			else if (cX > leftMargin + 1 * keyWidth + 1 * gap && cX < leftMargin + 2 * keyWidth + 1 * gap) return "Ba";
			else if (cX > leftMargin + 3 * keyWidth + 3 * gap && cX < leftMargin + 4 * keyWidth + 3 * gap) return "Hf";
			else if (cX > leftMargin + 4 * keyWidth + 4 * gap && cX < leftMargin + 5 * keyWidth + 4 * gap) return "Ta";
			else if (cX > leftMargin + 5 * keyWidth + 5 * gap && cX < leftMargin + 6 * keyWidth + 5 * gap) return "W";
			else if (cX > leftMargin + 6 * keyWidth + 6 * gap && cX < leftMargin + 7 * keyWidth + 6 * gap) return "Re";
			else if (cX > leftMargin + 7 * keyWidth + 7 * gap && cX < leftMargin + 8 * keyWidth + 7 * gap) return "Os";
			else if (cX > leftMargin + 8 * keyWidth + 8 * gap && cX < leftMargin + 9 * keyWidth + 8 * gap) return "Ir";
			else if (cX > leftMargin + 9 * keyWidth + 9 * gap && cX < leftMargin + 10 * keyWidth + 9 * gap) return "Pt";
			else if (cX > leftMargin + 10 * keyWidth + 10 * gap && cX < leftMargin + 11 * keyWidth + 10 * gap) return "Au";
			else if (cX > leftMargin + 11 * keyWidth + 11 * gap && cX < leftMargin + 12 * keyWidth + 11 * gap) return "Hg";
			else if (cX > leftMargin + 12 * keyWidth + 12 * gap && cX < leftMargin + 13 * keyWidth + 12 * gap) return "Tl";
			else if (cX > leftMargin + 13 * keyWidth + 13 * gap && cX < leftMargin + 14 * keyWidth + 13 * gap) return "Pb";
			else if (cX > leftMargin + 14 * keyWidth + 14 * gap && cX < leftMargin + 15 * keyWidth + 14 * gap) return "Bi";
			else if (cX > leftMargin + 15 * keyWidth + 15 * gap && cX < leftMargin + 16 * keyWidth + 15 * gap) return "Po";
			else if (cX > leftMargin + 16 * keyWidth + 16 * gap && cX < leftMargin + 17 * keyWidth + 16 * gap) return "At";
			else if (cX > leftMargin + 17 * keyWidth + 17 * gap && cX < leftMargin + 18 * keyWidth + 17 * gap) return "Rn";
		}
		if (cY > LATopMargin && cY < LATopMargin + 1 * keyHeight + 0 * gap) // Lanthanides
		{
			if (cX > LALeftMargin && cX < LALeftMargin + keyWidth) return "La";
			else if (cX > LALeftMargin + 1 * keyWidth + 1 * gap && cX < LALeftMargin + 2 * keyWidth + 1 * gap) return "Ce";
			else if (cX > LALeftMargin + 2 * keyWidth + 2 * gap && cX < LALeftMargin + 3 * keyWidth + 2 * gap) return "Pr";
			else if (cX > LALeftMargin + 3 * keyWidth + 3 * gap && cX < LALeftMargin + 4 * keyWidth + 3 * gap) return "Nd";
			else if (cX > LALeftMargin + 4 * keyWidth + 4 * gap && cX < LALeftMargin + 5 * keyWidth + 4 * gap) return "Pm";
			else if (cX > LALeftMargin + 5 * keyWidth + 5 * gap && cX < LALeftMargin + 6 * keyWidth + 5 * gap) return "Sm";
			else if (cX > LALeftMargin + 6 * keyWidth + 6 * gap && cX < LALeftMargin + 7 * keyWidth + 6 * gap) return "Eu";
			else if (cX > LALeftMargin + 7 * keyWidth + 7 * gap && cX < LALeftMargin + 8 * keyWidth + 7 * gap) return "Gd";
			else if (cX > LALeftMargin + 8 * keyWidth + 8 * gap && cX < LALeftMargin + 9 * keyWidth + 8 * gap) return "Tb";
			else if (cX > LALeftMargin + 9 * keyWidth + 9 * gap && cX < LALeftMargin + 10 * keyWidth + 9 * gap) return "Dy";
			else if (cX > LALeftMargin + 10 * keyWidth + 10 * gap && cX < LALeftMargin + 11 * keyWidth + 10 * gap) return "Ho";
			else if (cX > LALeftMargin + 11 * keyWidth + 11 * gap && cX < LALeftMargin + 12 * keyWidth + 11 * gap) return "Er";
			else if (cX > LALeftMargin + 12 * keyWidth + 12 * gap && cX < LALeftMargin + 13 * keyWidth + 12 * gap) return "Tm";
			else if (cX > LALeftMargin + 13 * keyWidth + 13 * gap && cX < LALeftMargin + 14 * keyWidth + 13 * gap) return "Yb";
			else if (cX > LALeftMargin + 14 * keyWidth + 14 * gap && cX < LALeftMargin + 15 * keyWidth + 14 * gap) return "Lu";
		}
		if (cY > LATopMargin + 1 * keyHeight + 1 * gap && cY < LATopMargin + 2 * keyHeight + 1 * gap) // Actinides
		{
			if (cX > LALeftMargin && cX < LALeftMargin + keyWidth) return "Ac";
			else if (cX > LALeftMargin + 1 * keyWidth + 1 * gap && cX < LALeftMargin + 2 * keyWidth + 1 * gap) return "Th";
			else if (cX > LALeftMargin + 2 * keyWidth + 2 * gap && cX < LALeftMargin + 3 * keyWidth + 2 * gap) return "Pa";
			else if (cX > LALeftMargin + 3 * keyWidth + 3 * gap && cX < LALeftMargin + 4 * keyWidth + 3 * gap) return "U";
		}
		
		// top, left: 115, 278; bottom, right: 160, 325; so H btn is 45 X 47
		// one pixel gap between buttons
		//alert(`x = ${cx}, y = ${cy}`);
	},
	
	caseOfChar: function (theChar)
	// theChar is a one character string
	//returns string for UPPER, LOWER, DIGIT, or ?ERROR?
	{
		retValue = 'ERROR'
		theNum = theChar.charCodeAt(0)
		if ((theNum >= 65) && (theNum <= 90))
			retValue = 'UPPER';
		else if ((theNum >= 97) && (theNum <= 122))
			retValue = 'LOWER';
		else if ((theNum >= 48) && (theNum <= 57))
			retValue = 'DIGIT';
		return retValue;
	},

	addToElemArray: function (vector,growingArr)
	{
		growingArr.push(vector);
		return growingArr;
	},

	parse: function (formula)
	//formula is a string containing the formula
	//This function returns a two-dimensional array with the elements and associated number
	{
		let elemArray = [];			// Our array holding elements and associated amounts
		let numArray = [];			// An array holding one element and one number
		const len = formula.length;
		let i = 0; // this is the formula marker
		let elemStr = "";			// this is the element string to be extracted
		let numStr = "";			// this is the number string to be extracted
		while (i < len)
			{
			elemStr = formula.charAt(i); // assumes first char is capitol letter of element
			i++;
			if (molWtCalc.caseOfChar(formula.charAt(i)) == 'LOWER')
				// we have a two character element
				{
				elemStr = elemStr + formula.charAt(i);
				i++;
				} // end of if for LOWER
			if (molWtCalc.caseOfChar(formula.charAt(i)) == 'DIGIT')
				// we have the beginning of a number after an element
				{
				numStr = formula.charAt(i);
				i++
				while (molWtCalc.caseOfChar(formula.charAt(i)) == 'DIGIT')
					{
					numStr = numStr + formula.charAt(i);
					i++;
					} // end of while for numbers
				} // end of if for DIGIT
			else
				{
				// no number so we put a '1' in numArray and advance the array marker
				numStr = "1";
				} // end of else
			numArray.push(elemStr);							// Add the new element to numArray
			numArray.push(numStr);							// Add the new number to numArray
			elemArray = molWtCalc.addToElemArray(numArray,elemArray);	// Add the new element/amount to elemArray
			numArray = [];									// Clear array for next pass
		} // end of big while
		return elemArray;			// Should have a completely parsed formula in elemArray
	
	}, // end of function

	getElemWt: function (elem)	// Returns the elemental weight for the provided elem string
	{
		switch (elem)
		{
			case "H":
				return 1.008
			case "He":
				return 4.003
			case "Li":
				return 6.941
			case "Be":
				return 9.012
			case "B":
				return 10.811
			case "C":
				return 12.011
			case "N":
				return 14.007
			case "O":
				return 15.999
			case "F":
				return 18.998
			case "Ne":
				return 20.180
			case "Na":
				return 22.990
			case "Mg":
				return 24.305
			case "Al":
				return 26.982
			case "Si":
				return 28.086
			case "P":
				return 30.974
			case "S":
				return 32.065
			case "Cl":
				return 35.453
			case "Ar":
				return 39.948
			case "K":
				return 39.098
			case "Ca":
				return 40.078
			case "Sc":
				return 44.956
			case "Ti":
				return 47.867
			case "V":
				return 50.942
			case "Cr":
				return 51.996
			case "Mn":
				return 54.938
			case "Fe":
				return 55.845
			case "Co":
				return 58.933
			case "Ni":
				return 58.693
			case "Cu":
				return 63.546
			case "Zn":
				return 65.390
			case "Ga":
				return 69.723
			case "Ge":
				return 72.640
			case "As":
				return 74.922
			case "Se":
				return 78.960
			case "Br":
				return 79.904
			case "Kr":
				return 83.800
			case "Rb":
				return 85.468
			case "Sr":
				return 87.620
			case "Y":
				return 88.906
			case "Zr":
				return 91.224
			case "Nb":
				return 92.906
			case "Mo":
				return 95.940
			case "Tc":
				return 98.000
			case "Ru":
				return 101.070
			case "Rh":
				return 102.906
			case "Pd":
				return 106.420
			case "Ag":
				return 107.868
			case "Cd":
				return 112.411
			case "In":
				return 114.818
			case "Sn":
				return 118.710
			case "Sb":
				return 121.760
			case "Te":
				return 127.600
			case "I":
				return 126.905
			case "Xe":
				return 131.293
			case "Cs":
				return 132.906
			case "Ba":
				return 137.327
			case "La":					// Lanthanides
				return 138.906
			case "Ce":
				return 140.116
			case "Pr":
				return 140.908
			case "Nd":
				return 144.240
			case "Pm":
				return 145.000
			case "Sm":
				return 150.360
			case "Eu":
				return 151.964
			case "Gd":
				return 157.250
			case "Tb":
				return 158.925
			case "Dy":
				return 162.500
			case "Ho":
				return 164.930
			case "Er":
				return 167.259
			case "Tm":
				return 168.934
			case "Yb":
				return 173.040
			case "Lu":				// End of Lanthanides
				return 174.967
			case "Hf":
				return 178.490
			case "Ta":
				return 180.948
			case "W":
				return 183.840
			case "Re":
				return 186.207
			case "Os":
				return 190.230
			case "Ir":
				return 192.217
			case "Pt":
				return 195.078
			case "Au":
				return 196.967
			case "Hg":
				return 200.590
			case "Tl":
				return 204.383
			case "Pb":
				return 207.200
			case "Bi":
				return 208.980
			case "Po":				// no stable nuclides
				return 209.000
			case "At":				// no stable nuclides
				return 210.000
			case "Rn":				// no stable nuclides
				return 222.000
			case "Fr":				// no stable nuclides
				return 223.000
			case "Ra":				// no stable nuclides
				return 226.000
			case "Ac":				// no stable nuclides
				return 227.000
			case "Th":
				return 232.038
			case "Pa":
				return 231.036
			case "U":
				return 238.029
			default:
				return 0
		}
	},

	calcMolWt: function (elemArray)		// Takes 2-D array of elem strings and amt strings
	{
		const eALen = elemArray.length;
		let i = 0;
		let elemWt = 0.0;
		let elemAmt = 0;
		let molWt = 0.0;
	
		while(i < eALen)
		{
			elemWt = molWtCalc.getElemWt(elemArray[i][0]);		// Convert elem str to elem wt
			elemAmt = parseInt(elemArray[i][1]);		// Convert amt str to number
			molWt = molWt + elemWt * elemAmt;			// Add new element to mol weight
			i++;
		}
	
		return molWt;									// Returns the molecular weight
	}

}




