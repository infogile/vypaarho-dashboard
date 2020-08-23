import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <div className="app-admin-wrap layout-sidebar-large">
        <div className="main-header">
          <div className="logo">
            <img src="assets/images/logo.png" alt="" />
          </div>
          <div className="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div style={{ margin: "auto" }}></div>
          <div className="header-part-right">
            <i
              className="i-Full-Screen header-icon d-none d-sm-inline-block"
              data-fullscreen
            ></i>
            <div className="dropdown">
              <div className="user col align-self-end">
                <img
                  src="assets/images/faces/1.jpg"
                  id="userDropdown"
                  alt=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <div className="dropdown-header">
                    <i className="i-Lock-User mr-1"></i> Timothy Carlson
                  </div>
                  <a className="dropdown-item" href="signin.html">
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-content-wrap">
          <div
            className="sidebar-left open rtl-ps-none"
            data-perfect-scrollbar=""
            data-suppress-scroll-x="true"
          >
            <ul className="navigation-left">
              <li className="nav-item">
                <a className="nav-item-hold" href="/">
                  <i className="nav-icon i-Safe-Box1"></i>
                  <span className="nav-text">Dashboard</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item">
                <a className="nav-item-hold" href="/listing">
                  <i className="nav-icon i-Add-Cart"></i>
                  <span className="nav-text">Listing</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item">
                <a className="nav-item-hold" href="/product">
                  <i className="nav-icon i-Box-Full"></i>
                  <span className="nav-text">Product</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item">
                <a className="nav-item-hold" href="/orders">
                  <i className="nav-icon i-Bell1"></i>
                  <span className="nav-text">Orders</span>
                </a>
                <div className="triangle"></div>
              </li>
            </ul>
          </div>
          <div
            className="sidebar-left-secondary rtl-ps-none"
            data-perfect-scrollbar=""
            data-suppress-scroll-x="true"
          >
            <ul className="childNav" data-parent="forms">
              <li className="nav-item">
                <a href="form.basic.html">
                  <i className="nav-icon i-File-Clipboard-Text--Image"></i>
                  <span className="item-name">Basic Elements</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="form.layouts.html">
                  <i className="nav-icon i-Split-Vertical"></i>
                  <span className="item-name">Form Layouts</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="form.input.group.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">Input Groups</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="form.validation.html">
                  <i className="nav-icon i-Close-Window"></i>
                  <span className="item-name">Form Validation</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="smart.wizard.html">
                  <i className="nav-icon i-Width-Window"></i>
                  <span className="item-name">Smart Wizard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tag.input.html">
                  <i className="nav-icon i-Tag-2"></i>
                  <span className="item-name">Tag Input</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="editor.html">
                  <i className="nav-icon i-Pen-2"></i>
                  <span className="item-name">Rich Editor</span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="apps">
              <li className="nav-item">
                <a href="invoice.html">
                  <i className="nav-icon i-Add-File"></i>
                  <span className="item-name">Invoice</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="inbox.html">
                  <i className="nav-icon i-Email"></i>
                  <span className="item-name">Inbox</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="chat.html">
                  <i className="nav-icon i-Speach-Bubble-3"></i>
                  <span className="item-name">Chat</span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="widgets">
              <li className="nav-item">
                <a href="widget-card.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">widget card</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="widget-statistics.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">widget statistics</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="widget-list.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">
                    Widget List
                    <span className="ml-2 badge badge-pill badge-danger">
                      New
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="widget-app.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">
                    Widget App
                    <span className="ml-2 badge badge-pill badge-danger">
                      New
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="weather-card.html">
                  <i className="nav-icon i-Receipt-4"></i>
                  <span className="item-name">
                    Weather App
                    <span className="ml-2 badge badge-pill badge-danger">
                      New
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="charts">
              <li className="nav-item">
                <a href="charts.echarts.html">
                  <i className="nav-icon i-File-Clipboard-Text--Image"></i>
                  <span className="item-name">echarts</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="charts.chartsjs.html">
                  <i className="nav-icon i-File-Clipboard-Text--Image"></i>
                  <span className="item-name">ChartJs</span>
                </a>
              </li>
              <li className="nav-item dropdown-sidemenu">
                <a href="#">
                  <i className="nav-icon i-File-Clipboard-Text--Image"></i>
                  <span className="item-name">Apex Charts</span>
                  <i className="dd-arrow i-Arrow-Down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="charts.apexAreaCharts.html">Area Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexBarCharts.html">Bar Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexBubbleCharts.html">Bubble Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexColumnCharts.html">Column Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexCandleStickCharts.html">
                      CandleStick Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts.apexLineCharts.html">Line Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexMixCharts.html">Mix Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexPieDonutCharts.html">PieDonut Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexRadarCharts.html">Radar Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexRadialBarCharts.html">
                      RadialBar Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts.apexScatterCharts.html">Scatter Charts</a>
                  </li>
                  <li>
                    <a href="charts.apexSparklineCharts.html">
                      Sparkline Charts
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="childNav" data-parent="extrakits">
              <li className="nav-item">
                <a href="image.cropper.html">
                  <i className="nav-icon i-Crop-2"></i>
                  <span className="item-name">Image Cropper</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="loaders.html">
                  <i className="nav-icon i-Loading-3"></i>
                  <span className="item-name">Loaders</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="ladda.button.html">
                  <i className="nav-icon i-Loading-2"></i>
                  <span className="item-name">Ladda Buttons</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="toastr.html">
                  <i className="nav-icon i-Bell"></i>
                  <span className="item-name">Toastr</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="sweet.alerts.html">
                  <i className="nav-icon i-Approved-Window"></i>
                  <span className="item-name">Sweet Alerts</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tour.html">
                  <i className="nav-icon i-Plane"></i>
                  <span className="item-name">User Tour</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="upload.html">
                  <i className="nav-icon i-Data-Upload"></i>
                  <span className="item-name">Upload</span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="uikits">
              <li className="nav-item">
                <a href="alerts.html">
                  <i className="nav-icon i-Bell1"></i>
                  <span className="item-name">Alerts</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="accordion.html">
                  <i className="nav-icon i-Split-Horizontal-2-Window"></i>
                  <span className="item-name">Accordion</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="badges.html">
                  <i className="nav-icon i-Medal-2"></i>
                  <span className="item-name">Badges</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="buttons.html">
                  <i className="nav-icon i-Cursor-Click"></i>
                  <span className="item-name">Buttons</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="cards.html">
                  <i className="nav-icon i-Line-Chart-2"></i>
                  <span className="item-name">Cards</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="card.metrics.html">
                  <i className="nav-icon i-ID-Card"></i>
                  <span className="item-name">Card Metrics</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="carousel.html">
                  <i className="nav-icon i-Video-Photographer"></i>
                  <span className="item-name">Carousels</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="lists.html">
                  <i className="nav-icon i-Belt-3"></i>
                  <span className="item-name">Lists</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="pagination.html">
                  <i className="nav-icon i-Arrow-Next"></i>
                  <span className="item-name">Paginations</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="popover.html">
                  <i className="nav-icon i-Speach-Bubble-2"></i>
                  <span className="item-name">Popover</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="progressbar.html">
                  <i className="nav-icon i-Loading"></i>
                  <span className="item-name">Progressbar</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tables.html">
                  <i className="nav-icon i-File-Horizontal-Text"></i>
                  <span className="item-name">Tables</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tabs.html">
                  <i className="nav-icon i-New-Tab"></i>
                  <span className="item-name">Tabs</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tooltip.html">
                  <i className="nav-icon i-Speach-Bubble-8"></i>
                  <span className="item-name">Tooltip</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="modals.html">
                  <i className="nav-icon i-Duplicate-Window"></i>
                  <span className="item-name">Modals</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="nouislider.html">
                  <i className="nav-icon i-Width-Window"></i>
                  <span className="item-name">Sliders</span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="sessions">
              <li className="nav-item">
                <a href="http://demos.ui-lib.com/gull/html/sessions/signin.html">
                  <i className="nav-icon i-Checked-User"></i>
                  <span className="item-name">Sign in</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="http://demos.ui-lib.com/gull/html/sessions/signup.html">
                  <i className="nav-icon i-Add-User"></i>
                  <span className="item-name">Sign up</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="http://demos.ui-lib.com/gull/html/sessions/forgot.html">
                  <i className="nav-icon i-Find-User"></i>
                  <span className="item-name">Forgot</span>
                </a>
              </li>
            </ul>
            <ul className="childNav" data-parent="others">
              <li className="nav-item">
                <a href="http://demos.ui-lib.com/gull/html/sessions/not-found.html">
                  <i className="nav-icon i-Error-404-Window"></i>
                  <span className="item-name">Not Found</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="user.profile.html">
                  <i className="nav-icon i-Male"></i>
                  <span className="item-name">User Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="open" href="blank.html">
                  <i className="nav-icon i-File-Horizontal"></i>
                  <span className="item-name">Blank Page</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-overlay"></div>
        </div>
        <div className="main-content-wrap sidenav-open d-flex flex-column">
          {this.props.children}
        </div>
      </div>
    );
  }
}
