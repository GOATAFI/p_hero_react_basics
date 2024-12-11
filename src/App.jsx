import "./App.css";

function App() {
  const studentInfo = [
    {
      grade: "7",
      tuition: 10000,
    },
    {
      grade: "8",
      tuition: 12000,
    },
    {
      grade: "9",
      tuition: 14000,
    },
  ];
  const deviceInfo = [
    {
      name: "Laptop",
      price: 50000,
    },
    {
      name: "Mobile",
      price: 5000,
    },
    {
      name: "Watch",
      price: 10000,
    },
  ];
  return (
    <>
      <h1>React YEHEEE</h1>
      <Hello></Hello>

      {deviceInfo.map((device, id) => (
        <Device key={id} {...device} />
      ))}
      {studentInfo.map((student, id) => (
        <Student key={id} {...student} />
      ))}
    </>
  );
}

function Hello() {
  return <h2>React shikhbo yeeeeeeee</h2>;
}

function Device(props) {
  return (
    <h1>
      Device Name : {props.name} Price:{props.price}
    </h1>
  );
}
function Student({ grade, tuition }) {
  // const  = props;
  return (
    <>
      <h2>
        Student reads in {grade}th grade and his tuition fee is {tuition}
      </h2>
    </>
  );
}
export default App;
