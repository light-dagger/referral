from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'username',
            'date_joined',
            'groups',
            'status',
            'tasks',
            'referrer',
            'address',
            'country',
            'city',
            'phone',
            'identification',
            'referral_link',

        ]

    referral_link = SerializerMethodField()

    def get_referral_link(self, instance: settings.AUTH_USER_MODEL):
        request = self.context.get('request')
        return instance.referral_link(request)
