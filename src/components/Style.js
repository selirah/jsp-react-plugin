import styled from 'styled-components';
import bg from '../img/bg.jpg';

const PlannerBackground = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  text-align: center;
  margin: 0;
  padding: 0;

  h2 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.3rem;
    padding-top: 2.5rem;
  }

  .planner__box {
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-wrap: wrap;

    .planner__box--inputbox {
      position: relative;
      input {
        width: 20rem;
        height: 2.5rem;
        margin-bottom: 0.65rem;
        border: none;
        border-radius: 0;
        outline: none;
        background: #fff;
        padding: 1rem;
        font-size: 0.8rem;
        margin-right: 1rem;
      }
      .location-icon {
        position: absolute;
        top: 0.8rem;
        right: 1rem;
        color: #222;
        font-size: 0.7rem;
        padding-right: 0.5rem;
        :hover {
          cursor: pointer;
        }
      }

      .btn {
        background: #222;
        width: 3rem;
        height: 2.5rem;
        margin-left: 0;
        text-align: center;
        border: none;
        border-radius: 0;
        outline: 0;
        :focus,
        :active {
          outline: none !important;
          box-shadow: none;
          background: #222 !important;
        }

        .map__icon {
          color: #fff;
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          font-size: 1rem;

          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .spinner {
    i {
      color: #a20c25;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

const LayoutBackground = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
  .layout__box {
    background: #fff;
    padding: 0 3rem 0 3rem;
    width: 60%;
    .card {
      background-color: transparent;
      border: none;
      border-radius: 0;
      padding: 0;
      box-shadow: 0 2px 20px 0 rgba(110, 130, 208, 0.18);

      .card-header {
        background-position: center;
        background-size: cover;
        // filter: grayscale(100%);
        border: none;
        padding: 0;
        height: 10rem;
        &:not(:last-child) {
          border-bottom: 2px solid #a20c25;
        }

        .btn {
          border-radius: 0;
          border: none;
          :focus,
          :active {
            outline: none !important;
            box-shadow: none;
          }
        }

        .btn-link {
          width: 100%;
          height: 60px;
          color: #fff;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          margin-top: 3rem;

          &:after {
            content: '\\2212';
            width: 35px;
            font-size: 25px;
            text-align: center;
            border-radius: 5px;
            top: 3.7rem;
            right: 27%;
            position: absolute;
            font-weight: 500;
            // background: #e8eeff;
          }

          &.collapsed:after {
            content: '\\002B';
          }
        }
      }

      .card-body {
        background: #fff;
        padding: 0;
      }
    }
  }

  @media (min-width: 280px) {
    .layout__box {
      padding: 0;
      width: 100%;

      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 1.2rem;
              text-align: center;
              top: 3.9rem;
              right: 13%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 320px) {
    .layout__box {
      padding: 0;
      width: 100%;
      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 1.2rem;
              text-align: center;
              top: 3.9rem;
              right: 13%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 428px) {
    .layout__box {
      padding: 0;
      width: 100%;
      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 1.2rem;
              text-align: center;
              top: 3.9rem;
              right: 13%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    .layout__box {
      padding: 0;
      width: 100%;

      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 1.2rem;
              text-align: center;
              top: 3.9rem;
              right: 13%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .layout__box {
      padding: 0;
      width: 100%;
      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 1.2rem;
              text-align: center;
              top: 3.9rem;
              right: 13%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .layout__box {
      padding: 0 3rem 0 3rem;
      width: 100%;
      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 25px;
              text-align: center;
              top: 3.7rem;
              right: 27%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .layout__box {
      padding: 0 3rem 0 3rem;
      width: 60%;
      .card {
        .card-header {
          .btn-link {
            font-size: 1rem;
            &:after {
              font-size: 25px;
              text-align: center;
              top: 3.7rem;
              right: 27%;
            }
          }
        }
      }
    }
  }
`;

const TabsLayout = styled.nav`
  .nav.nav-tabs {
    border: none;
    color: #48474f;
    background: #f2f2f2;
    border-radius: 0;

    a.nav-item.nav-link,
    a.nav-item.nav-link.active {
      border: none;
      padding: 10px 20px;
      color: #48474f;
      border-radius: 0;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  .tab-content {
    background: #fdfdfd;
    line-height: 25px;
    border: none;
    padding: 20px 15px !important;

    .tab-pane {
      .tab-pane-content {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .tab-pane__circle {
          text-align: center;
          background: #f3f3f3;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          padding: 20px 3px 0 3px;
          margin: 0.8rem;
          cursor: pointer;
          h4 {
            font-size: 1rem;
            font-weight: 700;
          }
        }

        .active {
          background: #a20c25;
          color: #fff;
        }
      }
      .tab-content__display {
        margin-top: 1.5rem;
        padding: 1.5rem 1rem 1.5rem 1rem;
        display: flex;
        flex-wrap: wrap;

        .display-info {
          width: 40%;
          .display-title {
            text-align: left;
            margin-bottom: 3rem;
            h4 {
              color: #3f3d4a;
              text-transform: uppercase;
              font-weight: 700;
              font-size: 1.2rem;
              span {
                color: #a20c25;
              }
            }
          }

          .display-details {
            display: block;
            .display-details__item {
              cursor: pointer;
              margin-bottom: 2rem;
              img {
                width: 25px;
                margin-right: 0.8rem;
              }
              span {
                text-transform: uppercase;
                font-weight: 700;
                font-size: 0.8rem;
                color: #a20c25;
              }
            }
          }
        }
        .display-table {
          width: 60%;
          .display-table-info {
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: flex-end;

            .date-title {
              margin-right: 0.5rem;
              h4 {
                font-size: 1rem;
                font-weight: 300;
                color: #727176;
                padding-top: 0.5rem;
              }
            }
            .calender {
              .date-picker {
                height: 2rem;
                margin-bottom: 0.65rem;
                border: none;
                border-radius: 0;
                outline: none;
                background: #f3f3f3;
                padding: 1rem;
                font-size: 0.8rem;
                margin-right: 1rem;
                color: #a20c25;
                font-weight: 700;
              }
              .react-datepicker-popper {
                z-index: 9999 !important;
              }
            }
          }

          .display-table-paragraph {
            margin-bottom: 2rem;
            p {
              font-size: 0.85rem;
            }
          }

          .table-list {
            .table {
              thead {
                background: #a20c25;
                th {
                  color: #fff;
                  border-bottom: none;
                  border-right: 1px solid #fff;
                  padding: 0.3rem;
                  font-weight: 300;
                }
              }
              tbody {
                tr {
                  background: #f3f3f3;
                  td {
                    border-right: 1px solid #fff;
                    padding: 0.3rem;
                    font-size: 0.75rem;
                    color: #a20c25;
                    font-weight: 700;
                    border-bottom: 1px solid #fff;
                    border-top: 1px solid #fff;

                    &:first-child {
                      width: 20%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ListLayout = styled.div`
  padding: 2rem !important;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  .search-box {
    width: 70%;
    .input-group {
      input {
        height: 2rem;
        border-radius: 2px;
        box-shadow: inset 0 0 5px 5px #f4f4f4;
        font-weight: 700;
        color: #2c2d30;
        &::placeholder {
          color: #bcb9b8;
        }
        :hover,
        :active,
        :focus {
          outline: none !important;
        }
      }

      .input-group-text {
        margin-left: 0.5rem;
        background: #fff;
        border: none;

        i {
          color: #a20c25;
          font-size: 1.5rem;
          font-weight: 400;
          cursor: pointer;
        }
      }
    }
  }
`;

export { PlannerBackground, LayoutBackground, TabsLayout, ListLayout };
