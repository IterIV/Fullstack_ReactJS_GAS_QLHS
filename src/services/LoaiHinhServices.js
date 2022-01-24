import axios from "axios";
export class LoaiHinhServices {
  constructor(urlGet, urlAdd, urlUpdate, urlDelete) {
    this.urlGet = urlGet;
    this.urlAdd = urlAdd;
    this.urlUpdate = urlUpdate;
    this.urlDelete = urlDelete;
    this.dataDefaut = { rowIndex: "", id: "", ten: "" };
  }
  getData = () => {
    axios({
      method: "get",
      url: `${this.urlGet}`,
    })
      .then(function (response) {
        localStorage.setItem("loaiHinh", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  addData = (data = this.dataDefaut) => {
    axios({
      method: "get",
      url: `${this.urlAdd}?id=${data.id}&ten=${data.ten}`,
    })
      .then(function (response) {
        localStorage.setItem("loaiHinh", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  updateData = (data = this.dataDefaut) => {
    axios({
      method: "get",
      url: `${this.urlAdd}?rowIndex=${data.rowIndex}&id=${data.id}&ten=${data.ten}`,
    })
      .then(function (response) {
        localStorage.setItem("loaiHinh", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  deleteData = (data = this.dataDefaut) => {
    axios({
      method: "get",
      url: `${this.urlAdd}?rowIndex=${data.rowIndex}`,
    })
      .then(function (response) {
        localStorage.setItem("loaiHinh", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
