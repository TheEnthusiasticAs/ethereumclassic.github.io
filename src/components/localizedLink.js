import React from 'react';
import { Link } from 'gatsby';
import LocaleContext from '../i18n/localeContext';
import { defaultLocale } from '../i18n/config';

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext);
  let path = to;
  if (locale && locale !== defaultLocale) {
    path = `/${locale}${to}`;
  }

  return <Link {...props} to={path} />;
};

export default LocalizedLink;