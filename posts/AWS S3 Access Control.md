### Different kind of policies
**IAM Policies**

IAM policies are attached to IAM users, groups, or roles. They are written in JSON using the AWS access policy languages. The ```Principal``` element
is not required in the policy.

**Bucket Policies**

It uses the same policy languages as the IAM policies, but can only be attached to Amazon S3 buckets.
There is a ```Principal``` element in it. As well as ```Action Resource```.

**S3 Access Control Lists(ACLs)**

AWS generally recommmends using the previous two ways of manage access.

### Authorization Process

1. Decision starts at deny
2. Evaluate all policies
3. If there is an explicit deny, then deny. If not...
4. Is there an allow? If yes, then allow. If not, deny. 


### Manage access for your Django projects

1. Disable "Block public access (bucket settings)"
