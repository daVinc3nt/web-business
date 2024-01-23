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
              <div className="relative overflow-x-auto mt-3">
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
              <div className="relative overflow-x-auto mt-3">
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
                        TP HCM↔ Đà Nẵng ↔ Hà Nội{" "}
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
            <div className="grid gap-5 mt-5">
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
            <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr>
                    <th className="text-s text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.head1" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3">
                      <FormattedMessage id="PriceList.MainPage.option1.subTitle2.table.head2" />
                    </th>
                    <th className="text-s font-normal text-black border border-black px-6 py-3">
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
            <div className="grid gap-5 mt-5">
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
            BẢNG GIÁ DỊCH VỤ CHUYỂN PHÁT TIẾT KIỆM ( Mã :TTK)
          </div>
          <div className="textTitleSmall mt-5">
            1. Bảng giá chuyển phát tiết kiệm :
          </div>

          <div className="relative overflow-x-auto mt-5">
            <div className="font-bold"> Tất cả các tỉnh, thành phố</div>
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
          <div className="relative overflow-x-auto mt-5">
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
          <div className="textTitleSmall mt-5">2. Địa danh giao nhận </div>

          <div className="grid gap-5 mt-5">
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
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                      Giang, Tây Ninh, Bà Rịa Vũng Tàu, TP. Hồ Chí Minh, Trà
                      Vinh, Vĩnh Long, An Giang, Bạc Liêu, Cà Mau, Cần Thơ, Đồng
                      Tháp, Hậu Giang, Kiên Giang, Sóc Trăng.
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="textTitleSmall ">
            <FormattedMessage id="PriceList.MainPage.option2.subTitle3" />
          </div>
          <div className="grid gap-5 mt-5">
            <div>
              <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning1" />
            </div>
            <div>
              + Bảng giá dịch vụ không áp dụng đối với bưu gửi có địa chỉ giao,
              nhận thuộc cùng trong 01 tỉnh. <br />
              + Giá cước và địa danh giao nhận bưu gửi của dịch vụ chuyển phát
              tiết kiệm (MãTTK) được nêu tại bảng giá này là các địa chỉ là các
              địa chỉ thuộc thành phố là trung tâm hành chính các tỉnh/ thành
              phố trực thuộc trung ương trên toàn quốc. <br />
              + Thời gian toàn trình từ 4 đến 7 ngày, tính cả ngày nghỉ T7, CN,
              lễ, tết theo quy định .
              <br />+ Cách tính cước áp dụng cho tất cả các địa danh như sau:
            </div>
            <div className="ml-3">
              ➢ Đối với tuyến huyện, xã không thuộc vùng sâu, vùng xa . Giá cước
              áp dụng bảng giá cước nêu tại Mục 1của bảng giá này và được cộng
              thêm 20% so với giá cước đã nêu tại Mục 1 và áp dụng cho bưu gửi
              có trọng lượng ≤ 300kg . <br />➢ Đối với tuyến huyện, xã thuộc
              vùng sâu, vùng xa khách hàng sử dụng dịch vụ chuyển phát và có sự
              thỏa thuận, đồng ý trước giữa công ty và người sử dụng dịch vụ về
              giá cước và thời gian toàn trình nhưng vẫn đảm bảo các quy định
              của pháp luật hiện hành. <br />➢ Đối với bưu gửi có trọng lượng
              trên 300kg thì phần trọng lượng từ 300 kg trở lên cước phí được
              tính là 1.100 vnđ/kg. Từ nấc 02 kg trở lên, phần lẻ được làm tròn
              thành 01kg để tính cước. <br /> ➢ Đối với hàng nguyên khối từ 200
              kg trở lên thu thêm cước nâng hạ tùy từng thời điểm và có sự thông
              báo và thỏa thuận của hai bên.
            </div>
            <div>
              + Trọng lượng được quy đổi theo công thức: Số đo (cm): (Dài x Rộng
              x Cao) ÷ 6000 = Trọng lượng( kg). <br />+ Giá trên chưa bao gồm
              phụ phí nhiên liệu và 10% thuế VAT
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-xl mt-10">
        <div className="p-10">
          <div className="textTitleMedium ">
            BẢNG GIÁ DỊCH VỤ CHUYỂN PHÁT HỎA TỐC
          </div>
          <div className="textTitleSmall mt-5">
            1. Bảng giá chuyển phát hỏa tốc:
          </div>
          <div className="grid gap-5 mt-5">
            <div>
              Áp dụng cho tất cả các địa chỉ phát tại các thành phố là trung tâm
              hành chính thuộc các tỉnh/ thành phố trực thuộc trung ương trên
              toàn quốc và Đảo Phú Quốc thuộc tỉnh Kiên Giang, Đảo Côn Đảo thuộc
              tỉnh Bà Rịa-Vũng Tàu.
            </div>
            <div className="font-bold text-xl">Khu vực: </div>
            <div className="grid gap-5">
              <div className="font-bold ml-2">-TP Hà Nội :</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Trọng lượng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hà Nội
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hồ Chí Minh
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Đà Nẵng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hà Nội ≤100 Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hồ Chí Minh ≤ 100Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh bay thẳng{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        02 kg đầu
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
                        0,5 kg tiếp theo
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
              <div className="font-bold ml-2">TP. Hồ Chí Minh</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Trọng lượng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hà Nội
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hồ Chí Minh
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Đà Nẵng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hà Nội ≤100 Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hồ Chí Minh ≤ 100Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh bay thẳng{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        02 kg đầu
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
                        0,5 kg tiếp theo
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
              <div className="font-bold ml-2">TP Đà Nẵng</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Trọng lượng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hà Nội
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hồ Chí Minh
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Đà Nẵng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hà Nội ≤100 Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hồ Chí Minh ≤ 100Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh bay thẳng{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        02 kg đầu
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
                        0,5 kg tiếp theo
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
              <div className="font-bold ml-2">Tỉnh cách TP Hà Nội ≤100 Km </div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Trọng lượng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hà Nội
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hồ Chí Minh
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Đà Nẵng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hà Nội ≤100 Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hồ Chí Minh ≤ 100Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh bay thẳng{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        02 kg đầu
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
                        0,5 kg tiếp theo
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
                Tỉnh cách TP Hồ Chí Minh ≤ 100Km
              </div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Trọng lượng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hà Nội
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Hồ Chí Minh
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        TP. Đà Nẵng
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hà Nội ≤100 Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh cách TP Hồ Chí Minh ≤ 100Km
                      </th>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Tỉnh bay thẳng{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-s font-bold text-black border border-black px-6 py-3">
                        02 kg đầu
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
                        0,5 kg tiếp theo
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
          <div className="textTitleSmall mt-5">2. Địa danh giao nhận </div>
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <tbody>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Đối với tỉnh/Tp cách Hà Nội ≤ 100 Km
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3 ">
                    Vĩnh Phúc, Thái Nguyên, Bắc Ninh, Hưng Yên, Hải Dương, Hải
                    Phòng, Hà Nam, Nam Định, Thái Bình, Ninh Bình, Hòa Bình
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Đối với Tỉnh/Tp cách TP.Hồ Chí Minh ≤ 100Km
                  </th>
                  <th className="text-s font-normal text-black border border-black  px-6 py-3">
                    Đồng Nai, Bình Dương, Bà Rịa- Vũng Tàu, Tây Ninh, Long An,
                    Bến Tre
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Đối với tỉnh bay thẳng (nhận bưu gửi tại Hà Nội & tỉnh cách
                    Hà Nội ≤ 100 Km)
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Nghệ An, Quảng Bình, Thừa Thiên- Huế, Bình Định, Khánh Hòa,
                    Phú Yên, Gia Lai, Đăk Lăk, Lâm Đồng, Cần Thơ, Phú Quốc , Côn
                    Đảo - BRVT
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Tỉnh bay thẳng (nhận bưu gửi tại TP Hồ Chí Minh& tỉnh cách
                    TP Hồ Chí Minh ≤ 100 Km)
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Nghệ An, Quảng Bình, Thừa Thiên- Huế, Bình Định, Khánh Hòa,
                    Phú Yên, Gia Lai, Đăk Lăk, Lâm Đồng, Cần Thơ, Cà Mau, Phú
                    Quốc- Kiên Giang, Côn Đảo-BRVT, Hải Phòng, Quảng Ninh
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Tỉnh bay thẳng (nhận bưu gửi tại Đà Nẵng & tỉnh cách Đà Nẵng
                    ≤ 100 Km)
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    Lâm Đồng, Nghệ An, Cần Thơ, Hải Phòng, Khánh Hòa
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="textTitleSmall mt-5">
            3. Quy định chi tiết địa danh nội thành – ngoại thành như sau:{" "}
          </div>
          <div className="grid gap-5 mt-5">
            <div className=" grid gap-5">
              <div className="font-bold">Hà Nội:</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Nội thành
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        Ngoại thành
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
              <div className="font-bold">TP. Hồ Chí Minh:</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Nội thành
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        Ngoại thành
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border text-sm border-black  px-6 py-3">
                        Quận 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, Bình Thạnh, Tân
                        Bình, Phú Nhuận, Gò Vấp
                      </td>
                      <td className="border text-sm border-black  px-6 py-3">
                        Quận 9, Hoóc Môn, Quận 12, Nhà Bè, Bình Tân, Bình Chánh,
                        Thủ Đức, huyện Củ Chi, Cần Giờ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="font-bold">Các tỉnh còn lại nêu tại mục 2</div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-s text-black border border-black px-6 py-3">
                        Nội thành
                      </th>
                      <th className="text-s  text-black border border-black px-6 py-3">
                        Ngoại thành
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="border text-sm border-black  px-6 py-3">
                        Thành phố/ thị xã thuộc TT hành chính Tỉnh/ Thành phố
                      </td>
                      <td className="border text-sm border-black  px-6 py-3">
                        Các Thành phố, Thị xã, Trung tâm Huyện còn lại.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="textTitleSmall mt-5">4. Thời gian toàn trình: </div>
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <tbody>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Địa danh nhận và phát
                  </th>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Thời gian
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Nội Thành ↔ Nôi thành cùng một tỉnh/Tp
                  </th>
                  <th className="text-s font-normal text-black border border-black  px-6 py-3">
                    6 Giờ
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Nội thành ↔ Ngoại thành cùng một tỉnh/Tp
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    12 Giờ
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Nội thành tỉnh / Tp A ↔ Nội thành tỉnh / Tp B
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    24 Giờ
                  </th>
                </tr>
                <tr>
                  <th className="text-s text-black border border-black px-6 py-3">
                    Nội thành tinh / Tp A ↔ Ngoại thành tỉnh / Tp B
                  </th>
                  <th className="text-s font-normal text-black border border-black px-6 py-3">
                    36 Giờ
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="textTitleSmall mt-5">5. Ghi chú</div>
          <div>
            <div className="mt-5">
              <FormattedMessage id="PriceList.MainPage.option1.subTitle1.warning1" />
              • Chỉ tiêu thời gian toàn trình: <br />
              ✓ Đối với tuyến huyện, xã không thuộc vùng sâu, vùng xa (Ngoại
              thành). Giá cước áp dụng bảng giá cước nêu tại Mục 1của bảng giá
              này và được cộng thêm 20% so với giá cước đã nêu tại Mục 1 <br />✓
              Đối với tuyến huyện, xã thuộc vùng sâu, vùng xa khách hàng sử dụng
              dịch vụ chuyển phát và có sự thỏa thuận, đồng ý trước giữa Công ty
              và Người sử dụng dịch vụ về giá cước và thời gian toàn trình nhưng
              vẫn đảm bảo các quy định của pháp luật hiện hành <br />
              • Đối với các tỉnh, thành phố khác không nằm trong bảng địa danh
              đã nêu tại mục 2 của bảng giá này. Giá cước và thời gian phát công
              ty và khách hàng sẽ thỏa thuận cụ thể. <br />
              • Hàng hóa cồng kềnh quy đổi theo công thức: Số đo (cm): Dài x
              Rộng x Cao ÷ 6000 = Trọng lượng kg <br />• Bảng giá trên chưa bao
              gồm phụ phí nhiên liệu và 10 % thuế VAT .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
