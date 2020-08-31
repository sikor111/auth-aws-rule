function (user, context, callback) {

  user.awsRole = 'arn:aws:iam::370273703639:role/auth0,arn:aws:iam::370273703639:saml-provider/auth0';
  user.awsRoleSession = user.name;

  context.samlConfiguration.mappings = {
    'https://aws.amazon.com/SAML/Attributes/Role': 'awsRole',
    'https://aws.amazon.com/SAML/Attributes/RoleSessionName': 'awsRoleSession'
  };

  callback(null, user, context);

}