import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotosThunk, incrementPage } from "../reducers/app";

const List = () => {
  const photos = useSelector((state) => state.app.list);
  const page = useSelector((state) => state.app.page);
  const loading = useSelector((state) => state.app.loading);

  const dispatch = useDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchPhotosThunk({ perPage: 30, page }));
  }, [page, dispatch]);

  const handleScroll = () => {
    if (
      containerRef.current.scrollHeight - containerRef.current.scrollTop <=
        containerRef.current.clientHeight + 200 &&
      !loading
    ) {
      dispatch(incrementPage());
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        width: "100vw",
        height: "90vh",
        overflowY: "scroll",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <img
            style={{ marginTop: 0, height: "80%" }}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />

          <p>{photo.user.name}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default List;
