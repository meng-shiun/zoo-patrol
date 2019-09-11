/**
 * Projects Data stores brief info of projects
 */
import { IProject } from '@app/shared';

export const projectsData: IProject[] = [
  {
    id: 1,
    client: 'Lueilwitz Group',
    name: 'Cam.ac.uk',
    manager: 'Kristof',
    status: {
      id: 510,
      status: 'Cancelled'
    },
    deadline: '5/6/2019'
  },
  {
    id: 2,
    client: 'Frami-Ledner',
    name: 'Over-blog.com',
    manager: 'Tom',
    status: {
      id: 200,
      status: 'Approved'
    },
    deadline: '8/4/2018'
  },
  {
    id: 3,
    client: 'Ledner-Bergstrom',
    name: 'Businessweek.com',
    manager: 'Kristof',
    status: {
      id: 605,
      status: 'Completed'
    },
    deadline: '6/28/2019'
  },
  {
    id: 4,
    client: 'Wilderman, Armstrong and Bashirian',
    name: 'Ox.ac.uk',
    manager: 'Kristof',
    status: {
      id: 310,
      status: 'In Progress'
    },
    deadline: '10/20/2018'
  },
  {
    id: 5,
    client: 'Pacocha, Hintz and Roob',
    name: 'Reverbnation.com',
    manager: 'Kristof',
    status: {
      id: 213,
      status: 'Pending'
    },
    deadline: '9/21/2018'
  },
  {
    id: 6,
    client: 'Nolan, Schowalter and Wolff',
    name: '163.com',
    manager: 'Tom',
    status: {
      id: 140,
      status: 'Proposed'
    },
    deadline: '1/15/2019'
  },
  {
    id: 7,
    client: 'Veum Inc',
    name: 'State.gov',
    manager: 'Chelsey',
    status: {
      id: 510,
      status: 'Cancelled'
    },
    deadline: '8/23/2018'
  },
  {
    id: 8,
    client: 'Hayes LLC',
    name: 'Cocolog-nifty.com',
    manager: 'Kristof',
    status: {
      id: 213,
      status: 'Pending'
    },
    deadline: '4/16/2019'
  },
  {
    id: 9,
    client: 'Kiehn, Okuneva and Huel',
    name: 'Un.org',
    manager: 'Tom',
    status: {
      id: 310,
      status: 'In Progress'
    },
    deadline: '3/6/2019'
  },
  {
    id: 10,
    client: 'Watsica LLC',
    name: 'Mediafire.com',
    manager: 'Chelsey',
    status: {
      id: 605,
      status: 'Completed'
    },
    deadline: '8/1/2018'
  }
];
