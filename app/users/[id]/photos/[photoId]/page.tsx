import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const Photo = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      User: {id} Photo: {photoId}
    </div>
  );
};

export default Photo;
