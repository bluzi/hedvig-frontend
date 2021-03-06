import React from "react"
import Loadable from "react-loadable"

const Loading = () => (
  <div></div>
)

const LoadableLanding = Loadable({
  loader: () => import("../landing"),
  loading: Loading
})

const LoadableAboutUs = Loadable({
  loader: () => import("../static/AboutUs"),
  loading: Loading
})

const LoadableFAQ = Loadable({
  loader: () => import("../static/FAQ"),
  loading: Loading
})

const LoadableChat = Loadable({
  loader: () => import("../../containers/Chat"),
  loading: () => Loading
})

const LoadableLogout = Loadable({
  loader: () => import("../../components/Logout"),
  loading: Loading
})

const LoadableLegal = Loadable({
  loader: () => import("../static/Legal"),
  loading: Loading
})

const LoadableContact = Loadable({
  loader: () => import("../static/Contact"),
  loading: Loading
})

const LoadableTerms = Loadable({
  loader: () => import("../static/Terms"),
  loading: Loading
})

const LoadableDownload = Loadable({
  loader: () => import("../static/Download"),
  loading: Loading
})

const LoadableWaitList = Loadable({
  loader: () => import("../WaitList"),
  loading: Loading
})

const LoadableNotFound = Loadable({
  loader: () => import("../../components/NotFound"),
  loading: Loading
})

const Landing = () => (
  <LoadableLanding />
)

const Chat = () => (
  <LoadableChat />
)

const AboutUs = () => (
  <LoadableAboutUs />
)

const FAQ = () => (
  <LoadableFAQ />
)

const Logout = () => (
  <LoadableLogout />
)

const Legal = () => (
  <LoadableLegal />
)

const Contact = () => (
  <LoadableContact />
)

const Terms = () => (
  <LoadableTerms />
)

const Download = () => (
  <LoadableDownload />
)

const WaitList = (props) => (
  <LoadableWaitList {...props} />
)

const NotFound = () => (
  <LoadableNotFound />
)

export { Landing, Chat, AboutUs, FAQ, Logout, Legal, Contact, Terms, Download, WaitList, NotFound }
