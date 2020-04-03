// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Write Increment
//   usage: node writeIncrement.js <instanceId> <tableId>

function main(instanceId = 'YOUR_INSTANCE_ID', tableId = 'YOUR_TABLE_ID') {
  // [START bigtable_writes_increment]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'YOUR_INSTANCE_ID';
  // const tableId = 'YOUR_TABLE_ID';

  const {Bigtable} = require('@google-cloud/bigtable');

  const bigtable = Bigtable();

  async function writeIncrement() {
    const instance = bigtable.instance(instanceId);
    const table = instance.table(tableId);

    const row = table.row('phone#4c410523#20190501');
    await row.increment('stats_summary:connected_wifi', -1);

    console.log(`Successfully updated row ${row}`);
  }

  writeIncrement();
  // [END bigtable_writes_increment]
}

main(...process.argv.slice(2));
