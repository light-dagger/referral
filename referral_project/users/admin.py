from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils.translation import ugettext_lazy as _

from referral_project.users.models import User


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (
            _('Personal info'), {
                'fields': (
                    'username',
                    'first_name',
                    'last_name',
                )
            }),
        (
            _('Permissions'), {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                    'groups',
                    'user_permissions',
                )
            }),
        (
            _('Important dates'), {
                'fields': (
                    'last_login',
                    'date_joined',
                )
            }
        ),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'username',
                'password1',
                'password2'
            ),
        }),
    )
    list_display = (
        'email',
        'username',
        'first_name',
        'last_name',
        'is_staff',
    )
    search_fields = (
        'email',
        'username',
        'first_name',
        'last_name',
    )
    ordering = (
        'email',
        'username',
    )
