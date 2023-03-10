import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import { Textarea } from "../../components/input";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-date-picker";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import Button from "../../components/button/Button";
import PerkOffer from "./parts/PerkOffer";
import useOnchage from "../../hooks/useOnchange";
import { toast } from "react-toastify";
import { apiUrl } from "../../config/config";
import ImageUpload from "../../components/image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);

const categories = ["chat GPT", "Education", "Architecture"];

const CampAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  const resetValues = () => {
    startDate("");
    endDate("");
    reset({});
  };
  const handleAddNewCamp = async (values) => {
    console.log(values);

    // try {
    //   axios.post(`${apiUrl}/campaigns`, {
    //     ...values,
    //     content,
    //     startDate,
    //     endDate,
    //   });
    //   toast.success("Create success");
    //   resetValues();
    // } catch (error) {
    //   toast.error(error);
    // }
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          console.log("upload: ~ file", file);
          // const bodyFormData = new FormData();
          // console.log("upload: ~ bodyFormData", bodyFormData);
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  const [content, setContent] = useState();
  const [filterCountry, setFilterCountry] = useOnchage(500);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountry() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchCountry();
  }, [filterCountry]);

  const handleSelectDropdown = (name, value) => {
    setValue(name, value);
  };
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center ">
        <h1 className="inline-block py-4 text-2xl font-bold  px-14 bg-text4 text-text2 bg-opacity-20 max-w-[379px] rounded-xl mb-10">
          Start a campaign ????
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCamp)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Titel *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            {/* {dropdown} */}
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("category") || "Select category"}
              ></Dropdown.Select>
              <Dropdown.List>
                {categories.map((item) => (
                  <Dropdown.Option
                    key={item}
                    onClick={() => {
                      handleSelectDropdown("category", item);
                    }}
                  >
                    <span className="capitalize">{item}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Feature Image</Label>
            <ImageUpload onChange={setValue}></ImageUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <PerkOffer></PerkOffer>

        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              control={control}
              name="raised_amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-left text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            {/* {dropdown} */}
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country") || "Select country"}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option
                  onClick={() => {
                    handleSelectDropdown("category", "chat GPT");
                  }}
                >
                  Chat GPT
                </Dropdown.Option>
                <Dropdown.Option onClick={() => {}}>Art</Dropdown.Option>
                <Dropdown.Option onClick={() => {}}>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            {/* {dropdown} */}
            <Dropdown>
              <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() => {
                        handleSelectDropdown("country", country.name.common);
                      }}
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            {/* <Input
              control={control}
              name="start_date"
              placeholder="Start Date"
            ></Input> */}
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10 text-center ">
          <Button
            type="submit"
            className="px-10 py-3 mx-auto text-white bg-primary"
          >
            Submit new campaign{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampAddNew;
