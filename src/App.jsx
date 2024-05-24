/** @format */

import "./App.css";
import { useMutation } from "react-query";

function App() {
  const { mutate, reset, data, isLoading } = useMutation(["users"], (newPost) => {
    return fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json chatset=UTF-8",
      },
    }).then((res) => res.json());
  });

  console.log(data, "mutatedData");

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <button type="button" onClick={() => mutate({ title: "test", body: "test-body", userId: 1 })}>
        Post Data
      </button>{" "}
      <button type="button" onClick={() => reset()}>
        Reset Data
      </button>
      {/* <div>
        <div>{data && data.map((dt, i) => <div key={i}>{dt.title}</div>)}</div>
      </div> */}
    </div>
  );
}

export default App;

// /** @format */

// import "./App.css";
// import { useQuery } from "react-query";

// function App() {
//   const { data, isLoading, refetch } = useQuery(
//     ["posts"],
//     () => {
//       return fetch("https://jsonplaceholder.org").then((res) => res.json());
//     },
//     { enabled: false }
//   );

//   console.log(data, isLoading, "fetchData");

//   if (isLoading) {
//     return <div>...Loading</div>;
//   }

//   return (
//     <div>
//       <button type="button" onClick={() => refetch()}>
//         {" "}
//         fetch Data
//       </button>
//       <div>
//         <div>{data && data.map((dt, i) => <div key={i}>{dt.title}</div>)}</div>
//       </div>
//     </div>
//   );
// }

// export default App;
