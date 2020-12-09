import { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// export function useAxiosGet(url, data) {
//   const [request, setRequest] = useState({
//     loading: false,
//     data: null,
//     error: false,
//   });

//   useEffect(() => {
//     setRequest({
//       loading: true,
//       data: null,
//       error: false,
//     });
//     if (data != null) {
//       axios
//         .get(url)
//         .then((response) => {
//           setRequest({
//             loading: false,
//             data: response.data,
//             error: false,
//           });
//         })
//         .catch((error) => {
//           setRequest({
//             loading: false,
//             data: null,
//             error: true,
//           });
//         });
//     } else {
//       setRequest({
//         loading: false,
//         data: data,
//         error: false,
//       });
//     }
//   }, [url, data]);

//   return request;
// }
