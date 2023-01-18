# W-12399674 - [Regression] Number input fields get cleared out onchange [LWC Code not working in spring'23 release]

## Repro

1. Clone this repository
2. Deploy to a new scratch org
3. Create an Account
4. Open the Account and on the lower right of the record page you will see a 'testInput' section
5. Enter some number chars
6. Observe that the characters do not appear (they actually do, but get cleared out immediately)

This is caused by a change introduced in 242 where utilsPrivate.normalizeNumber() runs this check:

if (typeof value !== 'number' || Number.isNaN(value)) {
        return returnValueIfInvalid;
      }

The value coming in is a Number object, so typeof value !== 'number' and it returns undefined.

See the related work item (bug) for more information.
