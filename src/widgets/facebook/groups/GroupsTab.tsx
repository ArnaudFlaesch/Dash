import * as React from 'react';
import { useEffect } from 'react';
import logger from '../../../utils/LogUtils';
import { getGroupsData } from '../FacebookAPI';
import IGroup from './IGroup';

export default function GroupsTab(): React.ReactElement {
  useEffect(() => {
    getGroupsData()
      .then((result: IGroup[]) => {
        logger.debug(result);
      })
      .catch((error: Error) => {
        logger.debug(error);
      });
  }, []);

  return <div>Liste des groupes auxquels vous appartenez</div>;
}
