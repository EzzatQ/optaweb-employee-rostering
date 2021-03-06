/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Employee } from './Employee';
import { RosterState } from './RosterState';
import { Spot } from './Spot';
import { HardMediumSoftScore } from './HardMediumSoftScore';

export interface RosterView {
  tenantId: number;
  startDate: string;
  endDate: string;
  score: HardMediumSoftScore;
  spotList: Spot[];
  employeeList: Employee[];
  rosterState: RosterState;
}
