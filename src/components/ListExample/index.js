const ListExample = () => {
  return (
    <div className="flex justify-between p-5">
      <div className="w-1/2 pr-5">
        <h3 className="font-bold text-[22px] mb-[45px] text-center">Bullet list example:</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Lorem ipsum dolor sit amet,{" "}
            <strong className="font-bold">consectetur adipiscing</strong> elit.
            Quam <br /> pellentesque at bibendum euismod tellus duis curs
            <br />
            us dignissim odio. Sit vulputate et integer in.
          </li>
          <li className="mb-2">
            Sit vel, senectus iaculis morbi.{" "}
            <strong className="font-bold">
              At amet interdum imperdiet laoreet <br /> morbi
            </strong>{" "}
            tincidunt fermentum, libero. Ante enim eget viverra at <br />{" "}
            porttitor accumsan.{" "}
            <a href="#" className="hover:underline">
              Orci non here
            </a>
          </li>
          <li>
            Quis dictum cursus faucibus mattis dignissim. Pellent <br /> que{" "}
            <strong className="font-bold">purus in sed</strong> sodales in
            mauris molestie. Elifend est <br /> consectetur interdum eu in
            auctor. Gravida leo et.
          </li>
        </ul>
      </div>
      <div className="w-1/2 pl-5">
        <h3 className="font-bold text-[22px] mb-[45px] text-center">Number list example:</h3>
        <ol className="list-decimal pl-5">
          <li className="mb-2">
            Lorem ipsum dolor sit amet,{" "}
            <strong className="font-bold">consectetur adipiscing</strong> elit.
            Quam <br /> pellentesque at bibendum euismod tellus duis curs
            <br />
            us dignissim odio. Sit vulputate et integer in.
          </li>
          <li className="mb-2">
            Sit vel, senectus iaculis morbi.{" "}
            <strong className="font-bold">
              At amet interdum imperdiet laoreet <br /> morbi
            </strong>{" "}
            tincidunt fermentum, libero. Ante enim eget viverra at <br />{" "}
            porttitor accumsan.{" "}
            <a href="#" className=" hover:underline">
              Orci non here
            </a>
          </li>
          <li>
            Quis dictum cursus faucibus mattis dignissim. Pellent <br /> que{" "}
            <strong className="font-bold">purus in sed</strong> sodales in
            mauris molestie. Elifend est <br /> consectetur interdum eu in
            auctor. Gravida leo et.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ListExample;
