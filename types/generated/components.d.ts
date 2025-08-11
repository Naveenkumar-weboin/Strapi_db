import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutContent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_contents';
  info: {
    displayName: 'AboutContent';
  };
  attributes: {
    imgSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    text4: Schema.Attribute.String;
  };
}

export interface AboutUsAboutContentz extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_contentzs';
  info: {
    description: '';
    displayName: 'AboutContentz';
  };
  attributes: {
    about: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    aboutImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    btntxt: Schema.Attribute.String;
    para1: Schema.Attribute.Text;
    para2: Schema.Attribute.Text;
    span1: Schema.Attribute.String;
    span2: Schema.Attribute.String;
    span3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_about_us_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'benefits.benefit', true>;
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para: Schema.Attribute.Text;
    para2: Schema.Attribute.Text;
    span1: Schema.Attribute.String;
    span2: Schema.Attribute.String;
    span3: Schema.Attribute.String;
    span4: Schema.Attribute.String;
    title: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface AboutUsEmployeeList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_employee_lists';
  info: {
    displayName: 'EmployeeList';
  };
  attributes: {
    Employee: Schema.Attribute.Component<'employee-list.employee', true>;
    para: Schema.Attribute.Text;
    span1: Schema.Attribute.String;
    span2: Schema.Attribute.String;
    span3: Schema.Attribute.String;
  };
}

export interface AboutUsEmployeeMain extends Struct.ComponentSchema {
  collectionName: 'components_about_us_employee_mains';
  info: {
    displayName: 'EmployeeMain';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para: Schema.Attribute.Text;
    span: Schema.Attribute.String;
    span2: Schema.Attribute.String;
    span3: Schema.Attribute.String;
    span4: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
  };
}

export interface AboutUsHomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_us_home_abouts';
  info: {
    description: '';
    displayName: 'HomeAbout';
  };
  attributes: {
    Counts: Schema.Attribute.Component<'home-about.counts', true>;
    description: Schema.Attribute.Text;
    highlightText: Schema.Attribute.String;
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    wrapedText: Schema.Attribute.String;
  };
}

export interface AboutUsImageComponent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_image_components';
  info: {
    displayName: 'ImageComponent';
  };
  attributes: {
    details: Schema.Attribute.Component<'image-component.details', true>;
    span: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsMiddleExtra extends Struct.ComponentSchema {
  collectionName: 'components_about_us_middle_extras';
  info: {
    description: '';
    displayName: 'MiddleExtra';
  };
  attributes: {
    content1: Schema.Attribute.Text;
    content2: Schema.Attribute.Text;
    content3: Schema.Attribute.Text;
    content4: Schema.Attribute.Text;
    imgSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    para1: Schema.Attribute.Text;
    para2: Schema.Attribute.Text;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsMovingTag extends Struct.ComponentSchema {
  collectionName: 'components_about_us_moving_tags';
  info: {
    description: '';
    displayName: 'MovingTag';
  };
  attributes: {
    MovingText: Schema.Attribute.Component<'about-us.moving-text', true>;
  };
}

export interface AboutUsMovingText extends Struct.ComponentSchema {
  collectionName: 'components_about_us_moving_texts';
  info: {
    description: '';
    displayName: 'MovingText';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AboutUsNewCeo extends Struct.ComponentSchema {
  collectionName: 'components_about_us_new_ceos';
  info: {
    displayName: 'NewCEO';
  };
  attributes: {
    CeoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CeoName: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface AboutUsOurProcessMain extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_process_mains';
  info: {
    description: '';
    displayName: 'OurProcessMain';
  };
  attributes: {
    Mainimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Process: Schema.Attribute.Component<'our-process.process', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsTimeLineData extends Struct.ComponentSchema {
  collectionName: 'components_about_us_time_line_data';
  info: {
    displayName: 'TimeLineData';
  };
  attributes: {
    timelinemedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    timelinepara: Schema.Attribute.Component<'about-us.time-line-para', true>;
    timelinepoints: Schema.Attribute.Component<
      'about-us.time-line-points',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsTimeLinePara extends Struct.ComponentSchema {
  collectionName: 'components_about_us_time_line_paras';
  info: {
    displayName: 'TimeLinePara';
  };
  attributes: {
    para: Schema.Attribute.Text;
  };
}

export interface AboutUsTimeLinePoints extends Struct.ComponentSchema {
  collectionName: 'components_about_us_time_line_points';
  info: {
    displayName: 'TimeLinePoints';
  };
  attributes: {
    points: Schema.Attribute.Text;
  };
}

export interface AboutUsTimelineDemo extends Struct.ComponentSchema {
  collectionName: 'components_about_us_timeline_demos';
  info: {
    displayName: 'TimelineDemo';
  };
  attributes: {
    timelinedata: Schema.Attribute.Component<'about-us.time-line-data', true>;
  };
}

export interface BenefitsBenefit extends Struct.ComponentSchema {
  collectionName: 'components_benefits_benefits';
  info: {
    description: '';
    displayName: 'benefit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlogs extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    description: '';
    displayName: 'Blogs';
  };
  attributes: {
    BlogPost: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    date: Schema.Attribute.String;
    field: Schema.Attribute.String;
    Heading: Schema.Attribute.Text;
    Img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    para: Schema.Attribute.Text;
    time: Schema.Attribute.String;
  };
}

export interface CardAnimeCardData extends Struct.ComponentSchema {
  collectionName: 'components_card_anime_card_data';
  info: {
    description: '';
    displayName: 'CardData';
  };
  attributes: {
    category: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerCareerMain extends Struct.ComponentSchema {
  collectionName: 'components_career_career_mains';
  info: {
    displayName: 'CareerMain';
  };
  attributes: {
    CoverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    MainTitle: Schema.Attribute.String;
  };
}

export interface CareerCareerX extends Struct.ComponentSchema {
  collectionName: 'components_career_career_xes';
  info: {
    displayName: 'CareerX';
  };
  attributes: {
    Careerz: Schema.Attribute.Component<'career.careers-data', true>;
    Maintext: Schema.Attribute.String;
  };
}

export interface CareerCareersData extends Struct.ComponentSchema {
  collectionName: 'components_career_careers_data';
  info: {
    description: '';
    displayName: 'CareersData';
  };
  attributes: {
    allJobData: Schema.Attribute.JSON;
    color: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    jobDescription: Schema.Attribute.JSON;
    jobtype: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workingdays: Schema.Attribute.String;
    workmode: Schema.Attribute.String;
    worktype: Schema.Attribute.JSON;
  };
}

export interface ContactContactText extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_texts';
  info: {
    displayName: 'ContactText';
  };
  attributes: {
    MainText: Schema.Attribute.Text;
    PageTitle: Schema.Attribute.String;
    SubText: Schema.Attribute.Text;
  };
}

export interface ContactInputCreation extends Struct.ComponentSchema {
  collectionName: 'components_contact_input_creations';
  info: {
    displayName: 'InputCreation';
  };
  attributes: {
    Input: Schema.Attribute.JSON;
  };
}

export interface ContactMapIcons extends Struct.ComponentSchema {
  collectionName: 'components_contact_map_icons';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    ContentX: Schema.Attribute.Component<'contact.reusable-icon-content', true>;
    IconTitle: Schema.Attribute.String;
  };
}

export interface ContactMaps extends Struct.ComponentSchema {
  collectionName: 'components_contact_maps';
  info: {
    description: '';
    displayName: 'Maps';
  };
  attributes: {
    Map: Schema.Attribute.Text;
  };
}

export interface ContactReusableIconContent extends Struct.ComponentSchema {
  collectionName: 'components_contact_reusable_icon_contents';
  info: {
    displayName: 'ReusableIconContent';
  };
  attributes: {
    IconContent: Schema.Attribute.Text;
  };
}

export interface CountCountServices extends Struct.ComponentSchema {
  collectionName: 'components_count_count_services';
  info: {
    description: '';
    displayName: 'CountServices';
  };
  attributes: {
    CountIcons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Services: Schema.Attribute.String;
  };
}

export interface EmployeeListEmployee extends Struct.ComponentSchema {
  collectionName: 'components_employee_list_employees';
  info: {
    displayName: 'Employee';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.Text;
  };
}

export interface FaqFaqsData extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs_data';
  info: {
    description: '';
    displayName: 'faqsData';
  };
  attributes: {
    FaqContent: Schema.Attribute.Text;
    FaqTitle: Schema.Attribute.String;
  };
}

export interface FooterFootermain extends Struct.ComponentSchema {
  collectionName: 'components_footer_footermains';
  info: {
    description: '';
    displayName: 'footermain';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    copyrightText: Schema.Attribute.String;
    firstlinkstitle: Schema.Attribute.String;
    Quicklink: Schema.Attribute.Component<'footer.quick-link', true>;
    secondlinkstitle: Schema.Attribute.String;
    Serviceslink: Schema.Attribute.Component<'footer.service-link', true>;
    socialmedia: Schema.Attribute.Component<'footer.social-media', true>;
    Title: Schema.Attribute.String;
    Tittlez: Schema.Attribute.String;
  };
}

export interface FooterQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'quickLink';
  };
  attributes: {
    quickname: Schema.Attribute.String;
    quickurl: Schema.Attribute.String;
  };
}

export interface FooterServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_service_links';
  info: {
    displayName: 'ServiceLink';
  };
  attributes: {
    servicename: Schema.Attribute.String;
    serviceurl: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    description: '';
    displayName: 'SocialMedia';
  };
  attributes: {
    socialmediaimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socialmediatitle: Schema.Attribute.String;
    socialmediaurl: Schema.Attribute.String;
  };
}

export interface HomeAboutCounts extends Struct.ComponentSchema {
  collectionName: 'components_home_about_counts';
  info: {
    displayName: 'Counts';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.BigInteger;
  };
}

export interface HomeCardAnime extends Struct.ComponentSchema {
  collectionName: 'components_home_card_animes';
  info: {
    displayName: 'CardAnime';
  };
  attributes: {
    cardData: Schema.Attribute.Component<'card-anime.card-data', true>;
    CardTitle: Schema.Attribute.String;
  };
}

export interface HomeCount extends Struct.ComponentSchema {
  collectionName: 'components_home_counts';
  info: {
    description: '';
    displayName: 'Count';
  };
  attributes: {
    CountImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    CountPara: Schema.Attribute.Text;
    countservices: Schema.Attribute.Component<'count.count-services', true>;
    CountSubtitle: Schema.Attribute.Text;
    CountTitle: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    faqsData: Schema.Attribute.Component<'faq.faqs-data', true>;
    para: Schema.Attribute.Text;
    subpara: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeGrowYourBusiness extends Struct.ComponentSchema {
  collectionName: 'components_home_grow_your_businesses';
  info: {
    displayName: 'GrowYourBusiness';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeHerosection extends Struct.ComponentSchema {
  collectionName: 'components_home_herosections';
  info: {
    description: '';
    displayName: 'herosection';
  };
  attributes: {
    heroImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Heropara: Schema.Attribute.Text;
    Herotitle: Schema.Attribute.String;
  };
}

export interface HomeHerovideo extends Struct.ComponentSchema {
  collectionName: 'components_home_herovideos';
  info: {
    description: '';
    displayName: 'Herovideo';
  };
  attributes: {
    herovidesrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    herovidetitle: Schema.Attribute.String;
  };
}

export interface HomeMainCount extends Struct.ComponentSchema {
  collectionName: 'components_home_main_counts';
  info: {
    description: '';
    displayName: 'mainCount';
  };
  attributes: {
    duration: Schema.Attribute.Decimal;
    hoverColor: Schema.Attribute.String;
    number: Schema.Attribute.BigInteger;
    static: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeMainCountup extends Struct.ComponentSchema {
  collectionName: 'components_home_main_countups';
  info: {
    description: '';
    displayName: 'MainCountup';
  };
  attributes: {
    mainCountup: Schema.Attribute.Component<'home.main-count', true>;
    MainTitle: Schema.Attribute.String;
  };
}

export interface HomeOurClients extends Struct.ComponentSchema {
  collectionName: 'components_home_our_clients';
  info: {
    displayName: 'OurClients';
  };
  attributes: {
    ClientsImgSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    OurClientPara: Schema.Attribute.Text;
    OurClientTitle: Schema.Attribute.String;
  };
}

export interface HomeRolling extends Struct.ComponentSchema {
  collectionName: 'components_home_rollings';
  info: {
    description: '';
    displayName: 'Rolling';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    RollingDescription: Schema.Attribute.Text;
    RollingImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    RollingTitle: Schema.Attribute.String;
  };
}

export interface HomeServiceX extends Struct.ComponentSchema {
  collectionName: 'components_home_service_xes';
  info: {
    displayName: 'ServiceX';
  };
  attributes: {
    services: Schema.Attribute.Component<'service-x.services', true>;
  };
}

export interface HomeSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_home_social_medias';
  info: {
    description: '';
    displayName: 'SocialMedia';
  };
  attributes: {
    ButtonIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeSponsorsx extends Struct.ComponentSchema {
  collectionName: 'components_home_sponsorsxes';
  info: {
    displayName: 'Sponsorsx';
  };
  attributes: {
    Sponsorsximages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Sponsorsxpara: Schema.Attribute.Text;
    Sponsorsxtitle: Schema.Attribute.String;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    HeadP1: Schema.Attribute.String;
    HeadP2: Schema.Attribute.String;
    HeadP3: Schema.Attribute.String;
    tweets: Schema.Attribute.Component<'home.testimonial-card', true>;
  };
}

export interface HomeTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_cards';
  info: {
    description: '';
    displayName: 'testimonialCard';
  };
  attributes: {
    content: Schema.Attribute.Text;
    handle: Schema.Attribute.String;
    imageSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
  };
  attributes: {
    provideservices: Schema.Attribute.Component<
      'why-choose-us.provided-services',
      true
    >;
    WhyChooseUsPara: Schema.Attribute.Text;
    WhyChooseUsTitle: Schema.Attribute.String;
  };
}

export interface HomeWhyusz extends Struct.ComponentSchema {
  collectionName: 'components_home_whyuszs';
  info: {
    displayName: 'Whyusz';
  };
  attributes: {
    whyuszData: Schema.Attribute.Component<'whyusz.whyusz-data', true>;
    WhyuszImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    WhyuszPara: Schema.Attribute.Text;
    WhyuszTitle: Schema.Attribute.String;
  };
}

export interface ImageComponentDetails extends Struct.ComponentSchema {
  collectionName: 'components_image_component_details';
  info: {
    description: '';
    displayName: 'details';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface OurProcessProcess extends Struct.ComponentSchema {
  collectionName: 'components_our_process_processes';
  info: {
    description: '';
    displayName: 'Process';
  };
  attributes: {
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para: Schema.Attribute.Text;
    percentage: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface PortfolioPort extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_ports';
  info: {
    description: '';
    displayName: 'PORT';
  };
  attributes: {
    closeBtn: Schema.Attribute.String;
    date: Schema.Attribute.String;
    Header: Schema.Attribute.String;
    MobileSize: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    openBtn: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    PcSize: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServiceXServices extends Struct.ComponentSchema {
  collectionName: 'components_service_x_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.Integer;
    para: Schema.Attribute.Text;
    tit: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesComp1 extends Struct.ComponentSchema {
  collectionName: 'components_services_comp1s';
  info: {
    description: '';
    displayName: 'Comp1';
  };
  attributes: {
    SecDmChild: Schema.Attribute.Component<'services.sec-dm-child', true>;
  };
}

export interface ServicesContentPara extends Struct.ComponentSchema {
  collectionName: 'components_services_content_paras';
  info: {
    displayName: 'ContentPara';
  };
  attributes: {
    Paragraphs: Schema.Attribute.String;
  };
}

export interface ServicesData extends Struct.ComponentSchema {
  collectionName: 'components_services_data';
  info: {
    description: '';
    displayName: 'Data';
  };
  attributes: {
    getintouch: Schema.Attribute.Component<'services.get-in-touch', false>;
    MainDm: Schema.Attribute.Component<'services.main-dm', false>;
    SecDm: Schema.Attribute.Component<'services.comp1', false>;
    Testimonials: Schema.Attribute.Component<'services.testimonial', false>;
    Title: Schema.Attribute.Component<'services.title', false>;
  };
}

export interface ServicesDigitalMarketing extends Struct.ComponentSchema {
  collectionName: 'components_services_digital_marketings';
  info: {
    description: '';
    displayName: 'Digital Marketing';
  };
  attributes: {
    getintouch: Schema.Attribute.Component<'services.get-in-touch', false>;
    MainDm: Schema.Attribute.Component<'services.main-dm', false>;
    SecDm: Schema.Attribute.Component<'services.sec-dm', false>;
    slug: Schema.Attribute.String;
    Testimonials: Schema.Attribute.Component<'services.testimonial', false>;
    Title: Schema.Attribute.Component<'services.title', false>;
  };
}

export interface ServicesGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_services_get_in_touches';
  info: {
    description: '';
    displayName: 'GetInTouch';
  };
  attributes: {
    getintouch: Schema.Attribute.Text;
  };
}

export interface ServicesMainDm extends Struct.ComponentSchema {
  collectionName: 'components_services_main_dms';
  info: {
    description: '';
    displayName: 'MainDm';
  };
  attributes: {
    MainDmChild: Schema.Attribute.Component<'services.main-dm-child', true>;
  };
}

export interface ServicesMainDmChild extends Struct.ComponentSchema {
  collectionName: 'components_services_main_dm_children';
  info: {
    displayName: 'MainDmChild';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    contentParagraphs: Schema.Attribute.Component<
      'services.content-para',
      true
    >;
    contentTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ServicesMainService extends Struct.ComponentSchema {
  collectionName: 'components_services_main_services';
  info: {
    displayName: 'MainService';
  };
  attributes: {
    MainServiceLink: Schema.Attribute.Component<
      'services.main-service-link',
      true
    >;
    MainText: Schema.Attribute.String;
  };
}

export interface ServicesMainServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_services_main_service_links';
  info: {
    displayName: 'MainServiceLink';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesOurServices extends Struct.ComponentSchema {
  collectionName: 'components_services_our_services';
  info: {
    description: '';
    displayName: 'OurServices';
  };
  attributes: {
    AllServicesData: Schema.Attribute.Component<'services.services', true>;
    maintitle: Schema.Attribute.String;
    Span1: Schema.Attribute.Text;
    Span2: Schema.Attribute.Text;
  };
}

export interface ServicesSecDm extends Struct.ComponentSchema {
  collectionName: 'components_services_sec_dms';
  info: {
    description: '';
    displayName: 'SecDm';
  };
  attributes: {
    SecDmChild: Schema.Attribute.Component<'services.sec-dm-child', true>;
  };
}

export interface ServicesSecDmChild extends Struct.ComponentSchema {
  collectionName: 'components_services_sec_dm_children';
  info: {
    description: '';
    displayName: 'SecDmChild';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    reverse: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesSecServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_services_sec_service_links';
  info: {
    displayName: 'SecServiceLink';
  };
  attributes: {
    SecServiceLinkz: Schema.Attribute.Component<
      'services.sec-service-linkz',
      true
    >;
    Sectext: Schema.Attribute.String;
  };
}

export interface ServicesSecServiceLinkz extends Struct.ComponentSchema {
  collectionName: 'components_services_sec_service_linkzs';
  info: {
    description: '';
    displayName: 'SecServiceLinkz';
  };
  attributes: {
    dataAction: Schema.Attribute.String;
    dataCategory: Schema.Attribute.String;
    dataLabel: Schema.Attribute.String;
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.Text;
    ServiceTitle: Schema.Attribute.String;
  };
}

export interface ServicesServiceResusable extends Struct.ComponentSchema {
  collectionName: 'components_services_service_resusables';
  info: {
    description: '';
    displayName: 'ServiceResusable';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    ServiceReusableBg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ServiceReusableIcons: Schema.Attribute.Component<
      'services.service-reusable-icons',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesServiceReusableIcons extends Struct.ComponentSchema {
  collectionName: 'components_services_service_reusable_icons';
  info: {
    description: '';
    displayName: 'ServiceReusableIcons';
  };
  attributes: {
    Icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    description: '';
    displayName: 'AllServices';
  };
  attributes: {
    colSpan: Schema.Attribute.Integer;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesSwiftLoading extends Struct.ComponentSchema {
  collectionName: 'components_services_swift_loadings';
  info: {
    displayName: 'SwiftLoading';
  };
  attributes: {
    MainText: Schema.Attribute.String;
    MetricsScore: Schema.Attribute.Integer;
    MetricsScoreText: Schema.Attribute.String;
    SpeedScore: Schema.Attribute.Integer;
    SpeedScoreText: Schema.Attribute.String;
  };
}

export interface ServicesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_services_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    TestimonialChild: Schema.Attribute.Component<
      'services.testimonial-child',
      true
    >;
  };
}

export interface ServicesTestimonialChild extends Struct.ComponentSchema {
  collectionName: 'components_services_testimonial_children';
  info: {
    displayName: 'TestimonialChild';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ServicesTitle extends Struct.ComponentSchema {
  collectionName: 'components_services_titles';
  info: {
    description: '';
    displayName: 'Title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    titleBgImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface WhyChooseUsProvidedServices extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_provided_services';
  info: {
    description: '';
    displayName: 'ProvidedServices';
  };
  attributes: {
    imgSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WhyuszWhyuszData extends Struct.ComponentSchema {
  collectionName: 'components_whyusz_whyusz_data';
  info: {
    description: '';
    displayName: 'WhyuszData';
  };
  attributes: {
    checkicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-content': AboutUsAboutContent;
      'about-us.about-contentz': AboutUsAboutContentz;
      'about-us.benefits': AboutUsBenefits;
      'about-us.employee-list': AboutUsEmployeeList;
      'about-us.employee-main': AboutUsEmployeeMain;
      'about-us.home-about': AboutUsHomeAbout;
      'about-us.image-component': AboutUsImageComponent;
      'about-us.middle-extra': AboutUsMiddleExtra;
      'about-us.moving-tag': AboutUsMovingTag;
      'about-us.moving-text': AboutUsMovingText;
      'about-us.new-ceo': AboutUsNewCeo;
      'about-us.our-process-main': AboutUsOurProcessMain;
      'about-us.time-line-data': AboutUsTimeLineData;
      'about-us.time-line-para': AboutUsTimeLinePara;
      'about-us.time-line-points': AboutUsTimeLinePoints;
      'about-us.timeline-demo': AboutUsTimelineDemo;
      'benefits.benefit': BenefitsBenefit;
      'blog.blogs': BlogBlogs;
      'card-anime.card-data': CardAnimeCardData;
      'career.career-main': CareerCareerMain;
      'career.career-x': CareerCareerX;
      'career.careers-data': CareerCareersData;
      'contact.contact-text': ContactContactText;
      'contact.input-creation': ContactInputCreation;
      'contact.map-icons': ContactMapIcons;
      'contact.maps': ContactMaps;
      'contact.reusable-icon-content': ContactReusableIconContent;
      'count.count-services': CountCountServices;
      'employee-list.employee': EmployeeListEmployee;
      'faq.faqs-data': FaqFaqsData;
      'footer.footermain': FooterFootermain;
      'footer.quick-link': FooterQuickLink;
      'footer.service-link': FooterServiceLink;
      'footer.social-media': FooterSocialMedia;
      'home-about.counts': HomeAboutCounts;
      'home.card-anime': HomeCardAnime;
      'home.count': HomeCount;
      'home.faq': HomeFaq;
      'home.grow-your-business': HomeGrowYourBusiness;
      'home.herosection': HomeHerosection;
      'home.herovideo': HomeHerovideo;
      'home.main-count': HomeMainCount;
      'home.main-countup': HomeMainCountup;
      'home.our-clients': HomeOurClients;
      'home.rolling': HomeRolling;
      'home.service-x': HomeServiceX;
      'home.social-media': HomeSocialMedia;
      'home.sponsorsx': HomeSponsorsx;
      'home.testimonial': HomeTestimonial;
      'home.testimonial-card': HomeTestimonialCard;
      'home.why-choose-us': HomeWhyChooseUs;
      'home.whyusz': HomeWhyusz;
      'image-component.details': ImageComponentDetails;
      'our-process.process': OurProcessProcess;
      'portfolio.port': PortfolioPort;
      'service-x.services': ServiceXServices;
      'services.comp1': ServicesComp1;
      'services.content-para': ServicesContentPara;
      'services.data': ServicesData;
      'services.digital-marketing': ServicesDigitalMarketing;
      'services.get-in-touch': ServicesGetInTouch;
      'services.main-dm': ServicesMainDm;
      'services.main-dm-child': ServicesMainDmChild;
      'services.main-service': ServicesMainService;
      'services.main-service-link': ServicesMainServiceLink;
      'services.our-services': ServicesOurServices;
      'services.sec-dm': ServicesSecDm;
      'services.sec-dm-child': ServicesSecDmChild;
      'services.sec-service-link': ServicesSecServiceLink;
      'services.sec-service-linkz': ServicesSecServiceLinkz;
      'services.service-resusable': ServicesServiceResusable;
      'services.service-reusable-icons': ServicesServiceReusableIcons;
      'services.services': ServicesServices;
      'services.swift-loading': ServicesSwiftLoading;
      'services.testimonial': ServicesTestimonial;
      'services.testimonial-child': ServicesTestimonialChild;
      'services.title': ServicesTitle;
      'why-choose-us.provided-services': WhyChooseUsProvidedServices;
      'whyusz.whyusz-data': WhyuszWhyuszData;
    }
  }
}
