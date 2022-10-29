


// Assigment #1 Temperature Conversion
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
      
// Assignment #3 Factorial, Sum and Average of First N Natural Numbers
<script>
public class SumNatural {

    public static void main(String[] args) {

        int num = 100, sum = 0;

        for(int i = 1; i <= num; ++i)
        {
            // sum = sum + i;
            sum += i;
        }

        System.out.println("Sum = " + sum);
    }
}
</script>
public class SumNatural {

    public static void main(String[] args) {

        int num = 50, i = 1, sum = 0;

        while(i <= num)
        {
            sum += i;
            i++;
        }

        System.out.println("Sum = " + sum);
    }
}

// Assignment #4 Payroll

<br/>Employee's Name:

<input type="text" id="emp_name" name="emp_name">

<br>

<br/>Days Worked:

<input type="text" id="emp_name" name="emp_name">

<br>

<br/> Daily Rate:

<input type="text" id="daily_rate" name="daily_rate">

<br>

<br/> Deduction Amount:

<input type="text" id="no_days_work" name="no_days_work">

<br>

<br>

<button onclick="solve_salary()">Solve Salary</button>

<br><br>

<p id="demo"></p>

<p id="demo2"></p>

</div>

<script>

  function solve_salary() {

  var  emp_name = document.getElementById("emp_name").value;

	var  daily_rate = document.getElementById("daily_rate").value;

	var  no_days_work = document.getElementById("no_days_work").value;

	

     gross_pay= parseFloat(daily_rate) * no_days_work;

	 

      results = "Employee Name :     " + emp_name + ".";

	  results2 ="Basic Salary  : Php " + gross_pay.toFixed(2)+".";

      	

      document.getElementById("demo").innerHTML = results;

	  document.getElementById("demo2").innerHTML = results2;

	 

  }
