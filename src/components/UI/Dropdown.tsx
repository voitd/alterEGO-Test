import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { resources } from "../../i18n";

const Dropdown = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const langs = Object.keys(resources);
  // useEffect(() => console.log("langs:", i18n.languages), [i18n.languages]);

  const handleChange = ({ target }: SelectChangeEvent) => {
    const value = target.value;
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lang-dropdown" sx={{ textTransform: "capitalize" }}>
        Lang
      </InputLabel>
      <Select
        labelId="lang-dropdown"
        id="lang-dropdown"
        value={lang}
        label="Lang"
        sx={{ textTransform: "capitalize" }}
        onChange={handleChange}
        color="primary"
      >
        {langs.map((lang) => (
          <MenuItem
            key={lang}
            value={lang}
            sx={{ textTransform: "capitalize" }}
          >
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
