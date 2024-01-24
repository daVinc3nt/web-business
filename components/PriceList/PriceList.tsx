import React from "react";
import { FormattedMessage } from "react-intl";
const PriceList = () => {
  return (
    <div className="sm:px-[4.5rem]  lg:px-[5.5rem] bg-black/70 pt-20 pb-2 h-full ">
      <div className=" relative pt-20">
        <div className="  h-96 w-full flex items-center justify-center">
          <div className="absolute justify-center flex flex-col items-center ">
            <div className="text-4xl font-bold text-white text-center">
              <FormattedMessage id="PriceList.MainPage.title"></FormattedMessage>
            </div>
            <div className=" text-white mt-5">
              <FormattedMessage id="PriceList.MainPage.subTitle"></FormattedMessage>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-xl">
        <div className="p-10">
          <div className="textTitleMedium">
            <FormattedMessage id="PriceList.MainPage.option1"></FormattedMessage>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option1.subTitle1"></FormattedMessage>
          </div>
          <div className="mt-5">
            <div>
              <div className="font-bold ">
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1"></FormattedMessage>
              </div>
              <div className="relative overflow-x-scroll mt-3">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="border border-black">
                    <tr>
                      <th className="border text-black border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head1"></FormattedMessage>
                      </th>
                      <th className="border text-black border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head2" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border border-black px-6 py-3">
                        {"<= 50"}
                      </td>
                      <td className="border border-black px-6 py-3">8.000 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">51-100</td>
                      <td className="border border-black px-6 py-3">8.500 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">101-250</td>
                      <td className="border border-black px-6 py-3">10.000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">251-500</td>
                      <td className="border border-black px-6 py-3">12.500</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        501-1000
                      </td>
                      <td className="border border-black px-6 py-3">16.000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        1001-1500
                      </td>
                      <td className="border border-black px-6 py-3">19.000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        1501-2000
                      </td>
                      <td className="border border-black px-6 py-3">21.000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head3" />
                      </td>
                      <td className="border border-black px-6 py-3">1.700 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head4" />
                      </td>
                      <td className="border border-black px-6 py-3">12~16h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="font-bold mt-5">
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub2" />
              </div>
              <div className="relative overflow-x-scroll mt-3">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="border text-black border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head1"></FormattedMessage>
                      </th>
                      <th className="border text-black border-black px-6 py-3k">
                        {"<="} 100km
                      </th>
                      <th className="border text-black border-black px-6 py-3">
                        100km ~ 300km
                      </th>
                      <th className="border text-black border-black px-6 py-3">
                        {">"} 300km
                      </th>
                      <th className="border text-black border-black px-6 py-3">
                        Hồ Chí Minh↔ Đà Nẵng ↔ Hà Nội{" "}
                      </th>
                      <th className="border text-black border-black px-6 py-3">
                        Hà Nội ↔Hồ Chí Minh{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border border-black px-6 py-3">
                        {"<="} 50
                      </td>
                      <td className="border border-black px-6 py-3">8.000 </td>
                      <td className="border border-black px-6 py-3">8.500 </td>
                      <td className="border border-black px-6 py-3">10.000</td>
                      <td className="border border-black px-6 py-3">9.000 </td>
                      <td className="border border-black px-6 py-3">9.091 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">51-100</td>
                      <td className="border border-black px-6 py-3">11.800</td>
                      <td className="border border-black px-6 py-3">12.500</td>
                      <td className="border border-black px-6 py-3">14.000</td>
                      <td className="border border-black px-6 py-3">13.000</td>
                      <td className="border border-black px-6 py-3">13.300</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">101-250</td>
                      <td className="border border-black px-6 py-3">16.500</td>
                      <td className="border border-black px-6 py-3">18.200</td>
                      <td className="border border-black px-6 py-3">23.000</td>
                      <td className="border border-black px-6 py-3">21.500</td>
                      <td className="border border-black px-6 py-3">22.000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">251-500</td>
                      <td className="border border-black px-6 py-3">23.900</td>
                      <td className="border border-black px-6 py-3">25.300</td>
                      <td className="border border-black px-6 py-3">29.900</td>
                      <td className="border border-black px-6 py-3">28.000</td>
                      <td className="border border-black px-6 py-3">28.600</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        501-1000
                      </td>
                      <td className="border border-black px-6 py-3">33.200</td>
                      <td className="border border-black px-6 py-3">34.000</td>
                      <td className="border border-black px-6 py-3">43.700</td>
                      <td className="border border-black px-6 py-3">40.900</td>
                      <td className="border border-black px-6 py-3">41.800</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        1001-1500
                      </td>
                      <td className="border border-black px-6 py-3">40.000</td>
                      <td className="border border-black px-6 py-3">41.800</td>
                      <td className="border border-black px-6 py-3">56.400</td>
                      <td className="border border-black px-6 py-3">52.800</td>
                      <td className="border border-black px-6 py-3">53.900</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        1501-2000
                      </td>
                      <td className="border border-black px-6 py-3">48.400</td>
                      <td className="border border-black px-6 py-3">51.700</td>
                      <td className="border border-black px-6 py-3">68.500</td>
                      <td className="border border-black px-6 py-3">64.100</td>
                      <td className="border border-black px-6 py-3">65.500</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head3" />
                      </td>
                      <td className="border border-black px-6 py-3">3.500 </td>
                      <td className="border border-black px-6 py-3">4.300 </td>
                      <td className="border border-black px-6 py-3">8.500 </td>
                      <td className="border border-black px-6 py-3">7.100 </td>
                      <td className="border border-black px-6 py-3">8.100 </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option1.subTitle1.sub1.table.head4" />
                      </td>
                      <td className="border border-black px-6 py-3">16~24h</td>
                      <td className="border border-black px-6 py-3">24~36h</td>
                      <td className="border border-black px-6 py-3">36~54h</td>
                      <td className="border border-black px-6 py-3">12~24h</td>
                      <td className="border border-black px-6 py-3">24~36h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid gap-5 mt-5 text-justify">
              <div className="font-bold">
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning1" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning2" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning3" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning4" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning5" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning6" />
              </div>
            </div>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option1.subTitle2" />
          </div>
          <div>
            <div className="relative overflow-x-scroll mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr>
                    <th className="text-s text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.head1" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.head2" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3 text-justify">
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.North" />
                      Hà Nội, Quảng Ninh, Thái Bình, Ninh Bình, Nam Định, Hải
                      Dương, Hải Phòng, Hưng Yên, Bắc Ninh, Hà Nam, Vĩnh Phúc,
                      Phú Thọ, Thái Nguyên, Bắc Giang, Thanh Hóa, Nghệ An, Hà
                      Tĩnh. <br />
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.Mid" />{" "}
                      Đà Nẵng,Thừa Thiên-Huế, Quảng Bình, Quảng Trị, Quảng Nam,
                      Quảng Ngãi, Gia Lai, Kon Tum. <br />
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.South" />{" "}
                      Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận, Bình Thuận,
                      Đồng Nai, Bình Dương, Bà Rịa-Vũng Tàu, Hồ Chí Minh, Long
                      An, Tiền Giang, Tây Ninh.{" "}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-5 mt-5 text-justify">
              <div className="font-bold">
                <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning1" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning2" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning3" />
              </div>
              <div>
                <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning4" />
                <div className="ml-3">
                  <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning5" />
                </div>
                <div className="ml-3">
                  <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning6" />
                </div>
                <div className="ml-3">
                  <FormattedMessage id="PriceList.MainPage.option1.subTitle2.warning7" />
                </div>
              </div>
            </div>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option1.subTitle3" />
          </div>
          <div className="grid gap-5 mt-5">
            <div>
              <FormattedMessage id="PriceList.MainPage.option1.subTitle3.warning1" />
            </div>
            <div>
              <FormattedMessage id="PriceList.MainPage.option1.subTitle3.warning2" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-xl mt-10 ">
        <div className="p-10">
          <div className="textTitleMedium">
            <FormattedMessage id="PriceList.MainPage.option2" />
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option2.subTitle1" />
          </div>

          <div className="relative overflow-x-scroll mt-5">
            <div className="font-bold">
              <FormattedMessage id="PriceList.MainPage.option2.subTitle1.sub1" />
            </div>
            <table className="w-full overflow-x-scroll  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <thead>
                <tr>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head1" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head2" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head3" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head4" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {"<= "}100
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    8.000 đ
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    8.000 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    8.000 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    101-250{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    9.600 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    9.600 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    9.600 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    251-500{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    13.200 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    13.200 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    13.200 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    501-1000{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    16.800 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    16.800 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    16.800 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    1001-1500{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    25.500 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    25.500 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    25.500 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    1501-2000{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    30.000 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    30.000 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    30.000 đ{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-scroll mt-5">
            <div className="font-bold">
              <FormattedMessage id="PriceList.MainPage.option2.subTitle1.sub2" />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <thead>
                <tr>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head1" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head2" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head3" />
                  </th>
                  <th className="text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head4" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    2 kg ~ 100 kg
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.800 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.900 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    4.000 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    100 kg ~ 1.000 kg{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.400 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.200 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    4.000 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    1000 kg ~ 3.000 kg{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.200 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.000 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.800 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3000 kg ~ 10.000 kg{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.000 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.800 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.600 đ{" "}
                  </td>
                </tr>
                <tr>
                  <td className="text-black border border-black px-6 py-3">
                    {">="}
                    10.000 kg{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    1.800 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    2.500 đ{" "}
                  </td>
                  <td className="text-black border border-black px-6 py-3">
                    {" "}
                    3.200 đ{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option2.subTitle2" />{" "}
          </div>

          <div className="grid gap-5 mt-5 text-justify">
            <div>
              •{" "}
              <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head2" />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub1" />
            </div>
            <div>
              •{" "}
              <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head3" />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub2" />
            </div>
            <div>
              •{" "}
              <FormattedMessage id="PriceList.MainPage.option2.subTitle1.table.head4" />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub3" />
            </div>
            <div>
              <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub4" />
            </div>
            <div className="relative overflow-x-scroll">
              <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-justify">
                <tbody>
                  <tr>
                    <th className="text-s text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub4.table.head1" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3 ">
                      Lai Châu, Lào Cai, Hà Giang, Cao bằng, Lạng Sơn, Quảng
                      Ninh, Điện Biên, Yên Bái,Tuyên Quang , Bắc Kạn, Phú Thọ,
                      Sơn La, Bắc Giang, Thái Nguyên, Vĩnh Phúc, Bắc Ninh, Hòa
                      Bình, Hải Dương, Hà Nam, Hải Phòng, Hưng Yên, Nam Định,
                      Ninh Bình, Thái Bình, Hà Nội, Hà Tĩnh, Nghệ An, Thanh Hóa.
                    </th>
                  </tr>
                  <tr>
                    <th className="text-s text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub4.table.head2" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3 ">
                      Quảng Bình, Quảng Trị, Thừa Thiên-Huế, Đà Nẵng, Quảng Nam,
                      Quảng Ngãi, Bình Định,Phú Yên, Khánh Hòa, Kon Tum, Gia
                      Lai,
                    </th>
                  </tr>
                  <tr>
                    <th className="text-s text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option2.subTitle2.sub4.table.head3" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3 ">
                      Bình Thuận, Ninh Thuận, Đắk Lắk, Lâm Đồng, Bình Dương,
                      Bình Phước, Bến Tre, Đắk Nông, Đồng Nai, Long An, Tiền
                      Giang, Tây Ninh, Bà Rịa Vũng Tàu,
                      <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      , Trà Vinh, Vĩnh Long, An Giang, Bạc Liêu, Cà Mau, Cần
                      Thơ, Đồng Tháp, Hậu Giang, Kiên Giang, Sóc Trăng.
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="textTitleSmall ">
            <FormattedMessage id="PriceList.MainPage.option2.subTitle3" />
          </div>
          <div className="grid gap-5 mt-5 text-justify">
            <div>
              <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning1" />
            </div>
            <div>
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning1" />{" "}
              <br />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning2" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning3" />
              <br />{" "}
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning4" />
            </div>
            <div className="ml-3">
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning5" />{" "}
              <br />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning6" />
              <br />{" "}
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning7" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning8" />
            </div>
            <div>
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning9" />{" "}
              <br />
              <FormattedMessage id="PriceList.MainPage.option2.subTitle3.warning10" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-xl mt-10">
        <div className="p-10">
          <div className="textTitleMedium ">
            <FormattedMessage id="PriceList.MainPage.option3" />
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option3.subTitle1" />
          </div>
          <div className="grid gap-5 mt-5">
            <div>
              <FormattedMessage id="PriceList.MainPage.option3.subTitle1.sub1" />
            </div>
            <div className="font-bold text-xl">
              <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option1" />
            </div>
            <div className="grid gap-5">
              <div className="font-bold ml-2">
                -
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />{" "}
                :
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option2" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option5" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        {"<="}2 kg
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        30.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        150.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        120.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        70.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        150.000 đ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.row1" />
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        3.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        12.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        10.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        12.000 đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-bold ml-2">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option2" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option5" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        {"<="} 2kg
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        150.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        30.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        120.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        70.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        150.000 đ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.row1" />
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        12.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        3.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        10.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        12.000 đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-bold ml-2">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option2" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option5" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        {"<="} 2kg
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        120.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        120.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        30.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        132.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        132.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        150.000 đ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.row1" />
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        10.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        10.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        3.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        11.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        11.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        12.000 đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-bold ml-2">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />{" "}
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option2" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option5" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        {"<="} 2 kg
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        70.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        132.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        77.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        189.700 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.row1" />
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        11.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.700 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        15.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.000 đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-bold ml-2">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option2" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option7" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option8" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option3" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option4" />
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option5" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        {"<="} 2kg
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        70.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        132.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        189.700 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        77.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        165.000 đ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle1.row1" />
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        11.000 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        15.200 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        7.700 đ
                      </td>
                      <td className="text-s text-black border border-black px-6 py-3">
                        13.200 đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option2.subTitle2" />{" "}
          </div>
          <div>
            <table className="w-full text-sm text-justify md:text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <tbody>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle1.table.head1" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3 ">
                    Vĩnh Phúc, Thái Nguyên, Bắc Ninh, Hưng Yên, Hải Dương, Hải
                    Phòng, Hà Nam, Nam Định, Thái Bình, Ninh Bình, Hòa Bình
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle1.table.head2" />
                  </th>
                  <th className="text-s font-normal text-black border border-black  px-6 py-3">
                    Đồng Nai, Bình Dương, Bà Rịa- Vũng Tàu, Tây Ninh, Long An,
                    Bến Tre
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle1.table.head3" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Nghệ An, Quảng Bình, Thừa Thiên- Huế, Bình Định, Khánh Hòa,
                    Phú Yên, Gia Lai, Đăk Lăk, Lâm Đồng, Cần Thơ, Phú Quốc , Côn
                    Đảo - BRVT
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle1.table.head4" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Nghệ An, Quảng Bình, Thừa Thiên- Huế, Bình Định, Khánh Hòa,
                    Phú Yên, Gia Lai, Đăk Lăk, Lâm Đồng, Cần Thơ, Cà Mau, Phú
                    Quốc- Kiên Giang, Côn Đảo-BRVT, Hải Phòng, Quảng Ninh
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle1.table.head5" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Lâm Đồng, Nghệ An, Cần Thơ, Hải Phòng, Khánh Hòa
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option3.subTitle3" />
          </div>
          <div className="grid gap-5 mt-5">
            <div className=" grid gap-5">
              <div className="font-bold">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                :
              </div>
              <div className="relative overflow-x-scroll text-justify">
                <table className="w-full text-sm text-justify rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row1" />
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row2" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border text-sm border-black  px-6 py-3">
                        Ba Đình, Hoàn Kiếm, Đống Đa, Tây Hồ, Hai Bà Trưng, Cầu
                        Giấy, Thanh Xuân, Hà Đông, Nam Từ Liêm, Bắc Từ Liêm,
                        Hoàng Mai.{" "}
                      </td>
                      <td className="border text-sm border-black  px-6 py-3">
                        Ba Vì, Chương Mỹ, Đan Phượng, Hoài Đức, Mỹ Đức, Phú
                        Xuyên, Phúc Thọ, Quốc Oai, Thạch Thất, Thanh Oai, Thường
                        Tín, Ứng Hòa, Sơn Tây, Đông Anh, Sóc Sơn, Gia Lâm, Long
                        Biên, Thanh Trì.{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="font-bold">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle1.option6" />
                :
              </div>
              <div className="relative overflow-x-scroll">
                <table className="w-full text-sm text-justify rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row1" />
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row2" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border text-sm border-black  px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row5" />
                      </td>
                      <td className="border text-sm border-black  px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row6" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="font-bold">
                <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.head1" />
              </div>
              <div className="relative overflow-x-scroll ">
                <table className="w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400 text-justify">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row1" />
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row2" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border text-sm border-black  px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row3" />
                      </td>
                      <td className="border text-sm border-black  px-6 py-3">
                        <FormattedMessage id="PriceList.MainPage.option3.subTitle3.table.row4" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option3.subTitle4" />
          </div>
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <tbody>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.sub1" />
                  </th>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.sub2" />
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.head1" />
                  </th>
                  <th className="text-s font-normal text-black border border-black  px-6 py-3">
                    6h
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.head2" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    12h
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.head3" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    24h
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    <FormattedMessage id="PriceList.MainPage.option3.subTitle4.head4" />
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    36h
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="textTitleSmall mt-5">
            <FormattedMessage id="PriceList.MainPage.option3.subTitle5" />
          </div>
          <div>
            <div className="mt-5 text-justify">
              <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning1" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning1" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning2" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning3" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning4" />{" "}
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning5" />
              <br />
              <FormattedMessage id="PriceList.MainPage.option3.subTitle5.warning6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
