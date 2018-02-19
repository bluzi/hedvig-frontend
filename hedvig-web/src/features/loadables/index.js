import React from "react"
import Loadable from "react-loadable"

const Loading = () => (
  <div></div>
)

const LoadableLanding = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */"../landing"),
  loading: Loading
})

const LoadableAboutUs = Loadable({
  loader: () => import(/* webpackChunkName: "AboutUs" */"../static/AboutUs"),
  loading: Loading
})

const LoadableChat = Loadable({
  loader: () => import(/* webpackChunkName: "Chat" */"../../containers/Chat"),
  loading: () => Loading
})

const LoadableLogout = Loadable({
  loader: () => import(/* webpackChunkName: "Logout" */"../../components/Logout"),
  loading: Loading
})

const LoadableLegal = Loadable({
  loader: () => import(/* webpackChunkName: "Legal" */"../static/Legal"),
  loading: Loading
})

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: "Contact" */"../static/Contact"),
  loading: Loading
})

const LoadableTerms = Loadable({
  loader: () => import(/* webpackChunkName: "Terms" */"../static/Terms"),
  loading: Loading
})

const LoadableWaitList = Loadable({
  loader: () => import(/* webpackChunkName: "WaitList" */"../WaitList"),
  loading: Loading
})

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */"../../components/NotFound"),
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

const WaitList = (props) => (
  <LoadableWaitList {...props} />
)

const NotFound = () => (
  <LoadableNotFound />
)

export { Landing, Chat, AboutUs, Logout, Legal, Contact, Terms, WaitList, NotFound }
