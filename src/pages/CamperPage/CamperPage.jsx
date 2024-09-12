import { useParams } from "react-router-dom";
import { useEffect } from "react";
import css from "./CamperPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperById } from "../../redux/vehicles/selectors";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  featuredList,
  vehicleDetailsAttributes,
} from "../../helpers/constants";

import { fetchCampers } from "../../redux/vehicles/operations";
import BookingForm from "../../components/Camper/BookingForm/BookingForm";

const CamperPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const camper = useSelector((state) => selectCamperById(state, camperId));
  return (
    camper && (
      <div className={css.CamperPage}>
        <div className={css.CamperInfoBlock}>
          <div className={css.titleBlock}>
            <h2>{camper.name}</h2>
            <div className={css.subtitleBlock}>
              <div className={css.locationBlock}>
                <p className={css.rating}>
                  <svg>
                    <use href="/icons.svg#rating"></use>
                  </svg>
                  {camper.rating}({camper.reviews.length} Reviews)
                </p>
                <p className={css.location}>
                  <svg>
                    <use href="/icons.svg#map"></use>
                  </svg>
                  {camper.location.split(", ").reverse().join(", ")}
                </p>
              </div>
              <p className={css.price}>{`€${camper.price}.00`}</p>
            </div>
          </div>
          <div className={css.gallery}>
            {camper.gallery.map((image) => (
              <div key={image.original} className={css.galleryImageContainer}>
                <img
                  className={css.galleryImage}
                  src={image.original}
                  alt={camper.description}
                />
              </div>
            ))}
          </div>
          <div className={css.descriptionBlock}>
            <p className={css.description}>{camper.description}</p>
          </div>
        </div>

        <div className={css.tabsSection}>
          <Tabs className={css.tabsBlock}>
            <TabList className={css.tabsList}>
              <Tab className={css.tab} selectedClassName={css.activeTab}>
                Features
              </Tab>
              <Tab className={css.tab} selectedClassName={css.activeTab}>
                Reviews
              </Tab>
            </TabList>
            <div className={css.tabWrapper}>
              <TabPanel>
                <div className={css.featuresTab}>
                  <div className={css.iconsList}>
                    {featuredList
                      .filter((feature) => camper[feature.name])
                      .map((feature) => (
                        <div key={feature.name} className={css.feature}>
                          <svg className={css.icon}>
                            <use href={`/icons.svg#${feature.icon}`}></use>
                          </svg>
                          <p>
                            {feature.name.charAt(0).toUpperCase() +
                              feature.name.slice(1)}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className={css.detailsBlock}>
                    <h3>Vehicle details</h3>
                    <div className={css.vehiclDetails}>
                      {vehicleDetailsAttributes.map((attribute) => (
                        <div key={attribute} className={css.vehicleDetailItem}>
                          <p>
                            {attribute.charAt(0).toUpperCase() +
                              attribute.slice(1)}
                          </p>
                          <p>{camper[attribute]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h3>Reviews</h3>
              </TabPanel>
              <BookingForm />
            </div>
          </Tabs>
        </div>
      </div>
    )
  );
};

export default CamperPage;
