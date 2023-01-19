import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const albums = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Albums"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/albums/&#123;id&#125;/tracks
              </td>
              <td> Get Album Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/albums/&#123;id&#125;
              </td>
              <td> Get Album</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/albums
              </td>
              <td> Get Several Albums</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default albums;
