		function calculate(source)
		{
			var display = document.getElementById("display");
			
			if (source.id == "=")
			{
				display.value = eq(display.value);
				return;
			}else if (source.id == "c")
			{
				display.value = "";
				return;
			}
			
			if (!isNumeric(source.id))
			{
				if (CountNonNumeric(display.value) > 0)
				{
					return;
				}	
			}
			
			display.value += source.id;	
		}
		
		function eq(input)
		{
			var a = "";
			var b = "";
			var operator = "";
			var flag;
			
			for (var i = 0, len = input.length; i < len; i++) {
				if (!isNumeric((input[i])))
				{
					flag = true;
					operator = input[i];
					continue;
				}
				
				if (!flag) {
					a += input[i];
				}else{
					b += input[i];
				}
			}
			
			a = parseFloat(a);
			b = parseFloat(b);
			var result = 0;
			
			if (operator == "+")
			{
				result = a + b;
			}else if (operator == "-")
			{
				result = a - b;
			}else if (operator == "/")
			{
				result = a / b;
			}else if (operator == "x")
			{
				result = a * b;
			}else if (operator == "%")
			{
				return (a / 10) * b;
			}
			
			return result;
		}
		
		function CountNonNumeric(input)
		{
				
			var count = 0;
			for (var i = 0, len = input.length; i < len; i++) {
				if (!isNumeric(input[i]))
				{
					count ++;
				}
			}
			
			return count;		
		}
		
		function isNumeric(n) {
			if (n == ".")
			{
				return true;
			}
			return !isNaN(parseFloat(n)) && isFinite(n);
		}